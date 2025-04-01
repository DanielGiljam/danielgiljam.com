import React from "react";

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
      return undefined;
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
          console.error(
            `Permission to listen to "deviceorientation" events not granted (state: ${state})`,
          );
        })
        .catch((error: unknown) => {
          console.error(error);
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
