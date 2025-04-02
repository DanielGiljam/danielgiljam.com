"use client";

import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import {
  PostHogProvider as PostHogProvider_,
  usePostHog,
} from "posthog-js/react";
import React from "react";

const PostHogPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  React.useEffect(() => {
    // track pageviews
    if (pathname && posthog) {
      let url = globalThis.origin + pathname;
      const search = searchParams.toString();
      if (search) {
        url += "?" + search;
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
};

/**
 * Wrap PostHogPageView in Suspense to avoid the useSearchParams usage above
 * from de-opting the whole app into client-side rendering.
 * See: https://nextjs.org/docs/messages/deopted-into-client-rendering
 */
const SuspendedPostHogPageView = () => {
  return (
    <React.Suspense>
      <PostHogPageView />
    </React.Suspense>
  );
};

export const PostHogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  React.useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://eu.i.posthog.com",
      capture_pageview: false, // we capture pageviews manually
    });
  }, []);
  return (
    <PostHogProvider_ client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PostHogProvider_>
  );
};
