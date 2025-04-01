export const register = async () => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("../sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("../sentry.edge.config");
  }
};

export { captureRequestError as onRequestError } from "@sentry/nextjs";
