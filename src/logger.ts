import { type Level, levels, setup } from "adze";

import { inRange } from "@/utils/numbers";

const isLogLevel = (loglevel: unknown): loglevel is Level | number =>
  levels.includes(loglevel as never) ||
  inRange(Number.parseInt(loglevel as never), 0, 8);

const getLogLevel = (): Level | number => {
  if (typeof localStorage !== "undefined") {
    const loglevelFromLocalStorage = localStorage.getItem("loglevel");
    if (isLogLevel(loglevelFromLocalStorage)) {
      return loglevelFromLocalStorage;
    }
  }
  if (isLogLevel(process.env.NEXT_PUBLIC_LOGLEVEL)) {
    return process.env.NEXT_PUBLIC_LOGLEVEL;
  }
  if (isLogLevel(process.env.LOGLEVEL)) {
    return process.env.LOGLEVEL;
  }
  if (process.env.NODE_ENV !== "production") {
    return "debug";
  }
  return "log";
};

export const globalStore = setup({
  activeLevel: getLogLevel(),
});

export { default as globalLogger } from "adze";
