"use client";

import dynamic from "next/dynamic";
import React from "react";

const XRLogo = dynamic(
  () => import("@/components/XRLogo").then((mod) => mod.XRLogo),
  { ssr: false },
);

export const XRLogoWrapper = () => {
  return (
    <div className="absolute right-0 bottom-0 z-10">
      <XRLogo />
    </div>
  );
};
