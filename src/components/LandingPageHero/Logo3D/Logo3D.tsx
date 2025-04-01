"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { globalLogger } from "@/logger";
import poster from "./poster.png";

const logger = globalLogger.label("Logo3D").seal();

const Logo3DInteractive = dynamic(
  () =>
    import("./Logo3DInteractive").then((mod) => {
      logger.timeNow.debug("Logo3DInteractive imported");
      return mod.Logo3DInteractive;
    }),
  { ssr: false },
);

export const Logo3D = () => {
  const [posterDismissed, setPosterDismissed] = React.useState(false);
  return (
    <div className="absolute inset-0 z-10 -mt-[calc(var(--logo-lockup-gap-size)+var(--logo-lockup-text-size)-var(--header-height))]">
      <Logo3DInteractive
        className={"h-full w-full"}
        onPosterDismissed={() => {
          logger.timeNow.debug("poster dismissed");
          setPosterDismissed(true);
        }}
      />
      {!posterDismissed && (
        <Image
          className={"-z-10 object-contain"}
          alt={""}
          aria-hidden={"true"}
          sizes={"100vw"}
          src={poster.src}
          onLoad={() => logger.timeNow.debug("poster loaded")}
          fill
          priority
        />
      )}
    </div>
  );
};
