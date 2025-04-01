"use client";

import { getFeedback } from "@sentry/nextjs";
import React from "react";

export const ReportABug = () => {
  const [feedback, setFeedback] =
    React.useState<ReturnType<typeof getFeedback>>();
  const ref = React.useCallback(
    (button: HTMLButtonElement | null) => {
      if (feedback && button) {
        feedback.attachTo(button);
      }
    },
    [feedback],
  );
  React.useEffect(() => {
    setFeedback(getFeedback());
  }, []);
  if (!feedback) {
    return;
  }
  return (
    <li>
      <button
        ref={ref}
        className={"font-medium hover:cursor-pointer hover:underline"}
        type={"button"}
      >
        Report a bug
      </button>
    </li>
  );
};
