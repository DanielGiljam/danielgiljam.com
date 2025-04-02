import { PostHog } from "posthog-node";

export const createPostHogClient = () => {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: "https://eu.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  });
};
