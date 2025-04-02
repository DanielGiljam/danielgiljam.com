"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import poster from "./poster.png";

import { globalLogger } from "@/logger";

const logger = globalLogger.label("Logo3D").seal();

const Logo3DInteractive = dynamic(
  () =>
    import("./Logo3DInteractive").then((module_) => {
      logger.timeNow.debug("Logo3DInteractive imported");
      return module_.Logo3DInteractive;
    }),
  { ssr: false },
);

export const Logo3D = () => {
  const [posterDismissed, setPosterDismissed] = React.useState(false);
  return (
    <div
      className={
        "absolute inset-0 -mt-[calc(var(--logo-lockup-gap-size)+var(--logo-lockup-text-size)-var(--header-height))]"
      }
    >
      <Logo3DInteractive
        className={"h-full w-full"}
        onPosterDismissed={() => {
          logger.timeNow.debug("poster dismissed");
          setPosterDismissed(true);
        }}
      />
      {!posterDismissed && (
        <Image
          alt={""}
          aria-hidden={"true"}
          className={"object-contain"}
          sizes={"100vw"}
          src={poster.src}
          fill
          priority
          onLoad={() => logger.timeNow.debug("poster loaded")}
        />
      )}
    </div>
  );
};
