/**
 * Heading Summary Manager
 * 
 * Manages the interaction between heading clicks and the AI summary modal.
 * This component attaches click handlers to all headings in the document
 * and coordinates the OpenAI agent to generate summaries.
 */

import React, { useEffect, useState, useCallback } from 'react';
import HeadingSummaryModal from './HeadingSummaryModal';
import {
  initializeOpenAI,
  generateSummary,
  extractContentFromElement,
  isInitialized,
} from '@/utils/gemini-agent';

const HeadingSummaryManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHeading, setCurrentHeading] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  // Initialize Gemini client on mount
  useEffect(() => {
    // Try to initialize with API key from localStorage
    if (typeof window !== 'undefined') {
      const apiKey = localStorage.getItem('gemini_api_key');
      
      if (apiKey && !isInitialized()) {
        try {
          initializeOpenAI(apiKey);
        } catch (err) {
          console.error('Failed to initialize Gemini:', err);
        }
      }
    }
  }, []);

  // Handle heading click
  const handleHeadingClick = useCallback(async (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    
    // Check if the clicked element is a heading
    const heading = target.closest('h1, h2, h3, h4, h5, h6') as HTMLHeadingElement;
    if (!heading) return;

    // Prevent default link behavior
    event.preventDefault();
    event.stopPropagation();

    // Get heading text
    const headingText = heading.textContent || 'Section';
    setCurrentHeading(headingText);
    setIsModalOpen(true);
    setIsLoading(true);
    setError(undefined);
    setSummary('');

    try {
      // Find the content section after this heading
      const contentSection = findContentSection(heading);
      const content = extractContentFromElement(contentSection);

      // Generate summary using Gemini
      const generatedSummary = await generateSummary(content, headingText, 5);
      setSummary(generatedSummary);
    } catch (err) {
      console.error('Error generating summary:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to generate summary. Please check your Gemini API key.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Attach click handlers to all headings
  useEffect(() => {
    // Only apply to /docs pages
    if (typeof window === 'undefined' || !window.location.pathname.startsWith('/docs')) {
      return;
    }

    // Wait for content to be rendered
    const timeoutId = setTimeout(() => {
      const headings = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6'
      );

      headings.forEach((heading) => {
        // Add a visual indicator that the heading is clickable
        (heading as HTMLElement).style.cursor = 'pointer';
        (heading as HTMLElement).style.position = 'relative';
        
        // Add title attribute
        (heading as HTMLElement).title = 'Click to see AI summary';

        // Add click handler
        heading.addEventListener('click', handleHeadingClick as EventListener);
      });

      // Cleanup function
      return () => {
        headings.forEach((heading) => {
          heading.removeEventListener('click', handleHeadingClick as EventListener);
        });
      };
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [handleHeadingClick]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSummary('');
    setError(undefined);
  };

  return (
    <HeadingSummaryModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      heading={currentHeading}
      summary={summary}
      isLoading={isLoading}
      error={error}
    />
  );
};

/**
 * Find the content section associated with a heading
 * Looks for content between this heading and the next heading
 */
function findContentSection(heading: HTMLElement): HTMLElement {
  const container = document.createElement('div');
  let currentElement = heading.nextElementSibling;

  // Collect all elements until the next heading
  while (currentElement) {
    // Stop if we hit another heading
    if (currentElement.tagName.match(/^H[1-6]$/)) {
      break;
    }

    container.appendChild(currentElement.cloneNode(true));
    currentElement = currentElement.nextElementSibling;
  }

  // If no content found, try to get the parent section
  if (container.children.length === 0) {
    const section = heading.closest('section') || heading.parentElement;
    if (section) {
      return section as HTMLElement;
    }
  }

  return container;
}

export default HeadingSummaryManager;
