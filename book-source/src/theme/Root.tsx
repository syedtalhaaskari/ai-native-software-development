/**
 * Docusaurus Root Component
 * 
 * This component wraps the entire site with the AnalyticsTracker,
 * enabling automatic tracking of user interactions (page views, scroll depth, etc.)
 * 
 * GA4 is configured via the GA4_MEASUREMENT_ID environment variable.
 * If not set, analytics will not load.
 * 
 * Also includes HeadingSummaryManager for AI-powered heading summaries
 * and ApiSettings for configuring the OpenAI API key.
 */

import React from 'react';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import HeadingSummaryManager from '@/components/HeadingSummaryManager';
import ApiSettings from '@/components/ApiSettings';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsTracker>
      {children}
      <HeadingSummaryManager />
      <ApiSettings />
    </AnalyticsTracker>
  );
}
