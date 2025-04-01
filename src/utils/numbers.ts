/**
 * @param x Subject.
 * @param min Range minimum (inclusive).
 * @param max Range minimum (exclusive).
 * @returns True if x is in range, false otherwise.
 */
export const inRange = (x: number, min: number, max: number) =>
  x >= min && x <= max;
