/* eslint-disable unicorn/filename-case */

// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import {
  feedbackAsyncIntegration,
  init,
  replayIntegration,
} from "@sentry/nextjs";

init({
  dsn: "https://589c5e979d4e1ee7b6900a020d4c1702@o4509078880059392.ingest.de.sentry.io/4509078888448080",

  enabled: process.env.NODE_ENV === "production",

  // Add optional integrations for additional features
  integrations: [
    replayIntegration(),
    feedbackAsyncIntegration({
      autoInject: false,
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
