import type Log from "adze";
import { levels } from "adze";

/**
 * Example use case: when you need to log things in rapidly firing
 * event handlers, but you don't want to log every time, since that
 * could make app crash pretty fast, but you want to log, let's say,
 * once every second (1Hz).
 *
 * @param logger A logger instance.
 * @param frequency Frequency provided in Hz.
 * @returns An "infrequent" logger instance.
 */
export const createInfrequentLogger = (logger: Log, frequency: number) => {
  const frequencyInterval = 1000 / frequency;
  let previousTs: number;
  return new Proxy(logger, {
    get(target, property) {
      if (levels.includes(property as never)) {
        const currentTs = performance.now();
        previousTs ??= currentTs;
        if (currentTs - previousTs > frequencyInterval) {
          previousTs = currentTs;
          return (
            target[property as never] as (...args: never) => unknown
          ).bind(target);
        }
        return () => {};
      }
      throw new Error(
        'Only level terminators available in "infrequent" loggers (https://adzejs.com/reference/terminators.html#level-terminators)',
      );
    },
  });
};
