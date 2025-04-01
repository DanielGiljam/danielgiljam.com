import { fromEvent, map } from "rxjs";

const trailingWindowLength = 2500; // ms
const trailingWindow: Array<{ beta: number; gamma: number }> = [];
let startTime: number;

/**
 * Observable which emits device orientation in the form of [beta, gamma]
 * where beta and gamma are bound to the range [-1, 1] and represent
 * a recent change in device orientation.
 *
 * The observable only emits `undefined` once if device orientation
 * isn't supported (if the device isn't fitted with the necessary sensors
 * to be able to tell the device's orientation).
 */
export const deviceOrientation$ = fromEvent<DeviceOrientationEvent>(
  globalThis,
  "deviceorientation",
).pipe(
  map((event) => {
    // do nothing if values are unavailable
    if (event.beta == null || event.gamma == null) {
      return;
    }
    // calculate averages based on trailing window
    const avg = {
      beta: 0,
      gamma: 0,
    };
    for (const event of trailingWindow) {
      avg.beta += event.beta;
      avg.gamma += event.gamma;
    }
    avg.beta /= trailingWindow.length;
    avg.gamma /= trailingWindow.length;
    // calculate diff
    const diff = {
      beta: event.beta - avg.beta,
      gamma: event.gamma - avg.gamma,
    };
    // ensure values are within range
    if (diff.beta < -180) {
      diff.beta += 180;
    }
    if (diff.beta >= 180) {
      diff.beta -= 180;
    }
    if (diff.gamma < -90) {
      diff.gamma += 90;
    }
    if (diff.gamma >= 90) {
      diff.gamma -= 90;
    }
    // update trailing window
    const currentTime = performance.now();
    startTime ??= currentTime;
    if (currentTime - startTime >= trailingWindowLength) {
      trailingWindow.shift();
    }
    trailingWindow.push(event as never);
    // finalize values
    let beta = diff.beta;
    let gamma = diff.gamma;
    // take into consideration screen orientation
    switch (screen.orientation.type) {
      case "landscape-primary": {
        beta = diff.gamma * -1;
        gamma = diff.beta * -1;
      }
      case "landscape-secondary": {
        beta = diff.gamma;
        gamma = diff.beta;
      }
      case "portrait-primary": {
        beta = diff.beta * -1;
        gamma = diff.gamma * -1;
      }
      case "portrait-secondary": {
        beta = diff.beta;
        gamma = diff.gamma;
      }
    }
    // shrink values to range [-1, 1]
    beta = Math.max(-45, Math.min(45, beta)) / 45;
    gamma = Math.max(-45, Math.min(45, gamma)) / 45;
    return [beta, gamma] as const;
  }),
);
