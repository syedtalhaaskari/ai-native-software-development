/**
 * Gemini Agent for Content Summarization
 * 
 * This module provides an AI agent that uses Google's Gemini REST API to generate
 * concise summaries of content sections directly from the browser.
 */

// Store API key
let apiKey: string | null = null;

/**
 * Initialize with API key
 * @param key - Google Gemini API key
 */
export function initializeOpenAI(key: string): void {
  apiKey = key;
}

/**
 * Get the stored API key
 */
function getApiKey(): string {
  if (!apiKey) {
    throw new Error('Gemini API key not initialized. Call initializeOpenAI() first.');
  }
  return apiKey;
}

/**
 * Generate a summary of content using Google Gemini REST API
 * @param content - The content to summarize
 * @param heading - The heading/title of the content section
 * @param maxSentences - Maximum number of sentences in summary (default: 5)
 * @returns Promise with the generated summary
 */
export async function generateSummary(
  content: string,
  heading: string,
  maxSentences: number = 5
): Promise<string> {
  try {
    const key = getApiKey();
    
    const prompt = `You are an expert educational content summarizer. Create clear, concise summaries that highlight key learning points.

Heading: ${heading}

Content:
${content}

Please provide a clear, concise summary of this content in exactly ${maxSentences} sentences or fewer. Focus on the key concepts and main takeaways. Make it easy to understand for learners.`;

    // Call Gemini REST API directly (CORS is allowed for API key authentication)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate summary');
    }

    const data = await response.json();
    const summary = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!summary) {
      throw new Error('No summary generated from API');
    }

    return summary.trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
}

/**
 * Check if API key is initialized
 */
export function isInitialized(): boolean {
  return apiKey !== null;
}

/**
 * Extract text content from HTML element
 * @param element - HTML element to extract text from
 * @returns Extracted text content
 */
export function extractContentFromElement(element: HTMLElement): string {
  // Clone the element to avoid modifying the original
  const clone = element.cloneNode(true) as HTMLElement;
  
  // Remove code blocks and other elements that might clutter the summary
  const codeBlocks = clone.querySelectorAll('pre, code');
  codeBlocks.forEach(block => {
    block.textContent = '[Code Example]';
  });
  
  // Get text content
  let content = clone.textContent || '';
  
  // Clean up whitespace
  content = content.replace(/\s+/g, ' ').trim();
  
  // Limit content length to avoid token limits (approximately 3000 characters)
  if (content.length > 3000) {
    content = content.substring(0, 3000) + '...';
  }
  
  return content;
}
