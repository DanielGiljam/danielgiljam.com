import React from "react";

import { globalLogger } from "@/logger";

const logger = globalLogger.label("useDeviceOrientationApiPermission").seal();

/**
 * On Safari, you must request permission from the user before being able to use the Device Orientation API.
 */
export const useDeviceOrientationApiPermission = () => {
  const [state, setState] = React.useState<"granted" | undefined>(() => {
    if (
      "requestPermission" in DeviceOrientationEvent &&
      localStorage.getItem("deviceOrientationApiPermission") !== "granted"
    ) {
      // it's Safari and permission hasn't already been granted
      return;
    }
    // any other browser or permission has already been granted
    return "granted";
  });
  const requestPermission = React.useCallback(() => {
    if (
      "requestPermission" in DeviceOrientationEvent &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((state: "granted" | unknown) => {
          if (state === "granted") {
            localStorage.setItem("deviceOrientationApiPermission", "granted");
            setState("granted");
            return;
          }
          logger.info(
            `Permission to listen to "deviceorientation" events not granted (state: ${state})`,
          );
        })
        .catch((error: unknown) => {
          logger.groupCollapsed.error(
            'Failed to request permission to listen to "deviceorientation" events',
          );
          logger.error(error);
          logger.groupEnd.log();
        });
      return;
    }
    // if called on other browser than Safari
    throw new Error(
      'Requesting permission to listen to "deviceorientation" events not supported',
    );
  }, []);
  return [state, requestPermission] as const;
};
