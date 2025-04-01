import { type ModelViewerElement } from "@google/model-viewer";
import React from "react";

import { DeviceOrientationApiPermissionButton } from "./DeviceOrientationApiPermissionButton";
import { deviceOrientation$ } from "./deviceOrientation$";
import { mousePosition$ } from "./mousePosition$";
import { useDeviceOrientationApiPermission } from "./useDeviceOrientationApiPermission";

import { cn } from "@/cn";
import { ModelViewer } from "@/components/ModelViewer";
import { globalLogger } from "@/logger";
import { degToRad } from "@/utils/angles";
import { createInfrequentLogger } from "@/utils/createInfrequentLogger";

const logger = globalLogger.label("Logo3DInteractive").seal();

const mouseMaxChangeDeg = 12.5;
const mouseMaxChangeRad = degToRad(mouseMaxChangeDeg);

const gyroMaxChangeDeg = 37.5;
const gyroMaxChangeRad = degToRad(gyroMaxChangeDeg);

export const Logo3DInteractive = ({
  className,
  onPosterDismissed,
}: {
  className?: string;
  onPosterDismissed?: () => void;
}) => {
  const [posterDismissed, setPosterDismissed] = React.useState(false);
  const [arAvailable, setArAvailable] = React.useState<boolean>();
  const [deviceOrientationApiPermission, requestPermission] =
    useDeviceOrientationApiPermission();
  const ref = React.useRef<ModelViewerElement>(null);
  React.useEffect(() => {
    setArAvailable(ref.current!.canActivateAR);
  }, []);
  React.useEffect(() => {
    if (posterDismissed) {
      const initialCameraOrbit = ref.current!.getCameraOrbit();
      const infrequentLogger = createInfrequentLogger(logger, 0.25);
      const subscription = mousePosition$.subscribe((mousePosition) => {
        if (!mousePosition || !document.hasFocus()) {
          ref.current!.cameraOrbit = initialCameraOrbit.toString();
          return;
        }
        const [x, y] = mousePosition;
        const deltaTheta = x * mouseMaxChangeRad;
        const deltaPhi = y * mouseMaxChangeRad;
        const newTheta = initialCameraOrbit.theta - deltaTheta;
        const newPhi = initialCameraOrbit.phi - deltaPhi;
        infrequentLogger.debug("mouse position", {
          x,
          y,
          deltaTheta,
          deltaPhi,
          newTheta,
          newPhi,
        });
        const cameraOrbit = ref.current!.getCameraOrbit();
        cameraOrbit.theta = newTheta;
        cameraOrbit.phi = newPhi;
        ref.current!.cameraOrbit = cameraOrbit.toString();
      });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [posterDismissed]);
  React.useEffect(() => {
    if (posterDismissed && deviceOrientationApiPermission === "granted") {
      const initialCameraOrbit = ref.current!.getCameraOrbit();
      const infrequentLogger = createInfrequentLogger(logger, 0.25);
      const subscription = deviceOrientation$.subscribe((screenOrientation) => {
        if (!screenOrientation || !document.hasFocus()) {
          ref.current!.cameraOrbit = initialCameraOrbit.toString();
          return;
        }
        const [beta, gamma] = screenOrientation;
        const deltaTheta = gamma * gyroMaxChangeRad;
        const deltaPhi = beta * gyroMaxChangeRad;
        const newTheta = initialCameraOrbit.theta - deltaTheta;
        const newPhi = initialCameraOrbit.phi - deltaPhi;
        infrequentLogger.debug("device position", {
          beta,
          gamma,
          deltaTheta,
          deltaPhi,
          newTheta,
          newPhi,
        });
        const cameraOrbit = ref.current!.getCameraOrbit();
        cameraOrbit.theta = newTheta;
        cameraOrbit.phi = newPhi;
        ref.current!.cameraOrbit = cameraOrbit.toString();
      });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [posterDismissed, deviceOrientationApiPermission]);
  return (
    <>
      <ModelViewer
        ref={ref}
        cameraOrbit={"0deg 90deg 300%"}
        className={className}
        maxCameraOrbit={"Infinity 180deg 300%"}
        scale={"0.25 0.25 0.25"}
        src={"/logo.glb"}
        ar
        onPosterDismissed={() => {
          setPosterDismissed(true);
          onPosterDismissed?.();
        }}
      />
      {arAvailable != null && deviceOrientationApiPermission !== "granted" && (
        <DeviceOrientationApiPermissionButton
          className={cn(
            "absolute bottom-4",
            arAvailable ? "right-18" : "right-4",
          )}
          onClick={requestPermission}
        />
      )}
    </>
  );
};
