import Log, { levels } from "adze";

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
  let prevTs: number;
  return new Proxy(logger, {
    get(target, prop, receiver) {
      if (levels.includes(prop as never)) {
        const currentTs = performance.now();
        prevTs ??= currentTs;
        if (currentTs - prevTs > frequency) {
          prevTs = currentTs;
          return Reflect.get(target, prop, receiver);
        }
        return () => {};
      }
      throw new Error(
        'Only level terminators available in "infrequent" loggers (https://adzejs.com/reference/terminators.html#level-terminators)',
      );
    },
  });
};
