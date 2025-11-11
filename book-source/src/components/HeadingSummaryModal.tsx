/**
 * Heading Summary Modal Component
 * 
 * A modal that displays AI-generated summaries of content sections.
 * Activated when users click on headings in the documentation.
 */

import React, { useEffect, useState } from 'react';
import styles from './HeadingSummaryModal.module.css';

interface HeadingSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  summary: string;
  isLoading: boolean;
  error?: string;
}

const HeadingSummaryModal: React.FC<HeadingSummaryModalProps> = ({
  isOpen,
  onClose,
  heading,
  summary,
  isLoading,
  error,
}) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            <span className={styles.summaryIcon}>✨</span>
            AI Summary
          </h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          <h3 className={styles.headingTitle}>{heading}</h3>
          
          {isLoading && (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p>Generating summary...</p>
            </div>
          )}

          {error && (
            <div className={styles.errorContainer}>
              <p className={styles.errorText}>⚠️ {error}</p>
              <p className={styles.errorHelp}>
                Make sure you've configured your Gemini API key in settings.
              </p>
            </div>
          )}

          {!isLoading && !error && summary && (
            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>{summary}</p>
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.closeButtonPrimary} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadingSummaryModal;
