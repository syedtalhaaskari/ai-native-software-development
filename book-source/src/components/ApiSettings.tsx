/**
 * API Settings Component
 * 
 * Allows users to configure their OpenAI API key for heading summaries.
 * The key is stored in localStorage for persistence across sessions.
 */

import React, { useState, useEffect } from 'react';
import { initializeOpenAI, isInitialized } from '@/utils/gemini-agent';
import styles from './ApiSettings.module.css';

const ApiSettings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    // Load API key from localStorage
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      setMessage('Please enter a valid API key');
      return;
    }

    try {
      // Save to localStorage
      localStorage.setItem('gemini_api_key', apiKey);
      
      // Initialize Gemini client
      initializeOpenAI(apiKey);
      
      setMessage('✅ API key saved successfully! Click any heading to see summaries.');
      setTimeout(() => {
        setMessage('');
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      setMessage('❌ Failed to save API key. Please try again.');
    }
  };

  const handleClear = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setMessage('API key cleared');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <>
      {/* Settings Button */}
      <button
        className={styles.settingsButton}
        onClick={() => setIsOpen(!isOpen)}
        title="Configure AI Summary Settings"
        aria-label="Open AI settings"
      >
        <span className={styles.settingsIcon}>⚙️</span>
        {isInitialized() && <span className={styles.activeDot}></span>}
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className={styles.settingsPanel}>
          <div className={styles.panelHeader}>
            <h3>AI Summary Settings</h3>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          <div className={styles.panelBody}>
            <p className={styles.description}>
              Enter your Google Gemini API key to enable AI-powered summaries when you click on headings.
            </p>

            <div className={styles.inputGroup}>
              <label htmlFor="gemini-key" className={styles.label}>
                Google Gemini API Key
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="gemini-key"
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="AIza..."
                  className={styles.input}
                />
                <button
                  className={styles.toggleBtn}
                  onClick={() => setShowKey(!showKey)}
                  title={showKey ? 'Hide key' : 'Show key'}
                  aria-label={showKey ? 'Hide API key' : 'Show API key'}
                >
                  {showKey ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {message && (
              <div className={styles.message}>
                {message}
              </div>
            )}

            <div className={styles.actions}>
              <button onClick={handleSave} className={styles.saveBtn}>
                Save
              </button>
              <button onClick={handleClear} className={styles.clearBtn}>
                Clear
              </button>
            </div>

            <div className={styles.help}>
              <p className={styles.helpTitle}>How to get an API key:</p>
              <ol className={styles.helpList}>
                <li>Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
                <li>Sign in with your Google account</li>
                <li>Click "Create API Key"</li>
                <li>Copy and paste the key here</li>
              </ol>
              <p className={styles.note}>
                ℹ️ Your API key is stored locally in your browser and never sent to our servers. Gemini 2.0 Flash is fast and free!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ApiSettings;
