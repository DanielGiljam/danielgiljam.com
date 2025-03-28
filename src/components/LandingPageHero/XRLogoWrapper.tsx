"use client";

import dynamic from "next/dynamic";
import React from "react";

const XRLogo = dynamic(
  () => import("@/components/XRLogo").then((mod) => mod.XRLogo),
  { ssr: false },
);

export const XRLogoWrapper = () => {
  return (
    <div className="absolute inset-0 z-10 -mt-[calc(var(--logo-lockup-gap-size)+var(--logo-lockup-text-size)-var(--header-height))]">
      <XRLogo />
    </div>
  );
};
