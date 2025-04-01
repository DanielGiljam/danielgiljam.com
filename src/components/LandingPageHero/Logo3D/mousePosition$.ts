import { combineLatestWith, fromEvent, map, mergeWith, startWith } from "rxjs";

/**
 * Observable which emits mouse position in the form of [x, y]
 * where [-1, -1] means top left corner of screen and [1, 1] means
 * bottom right corner of screen and [0, 0] means dead center.
 *
 * Position updates and takes into account resize and scroll events.
 *
 * Given a scroll offset, the position could be greater than 1, for example,
 * [0, 2] means the page has been scrolled at least one view height.
 *
 * If the mouse has left the view, the observable emits `undefined`.
 *
 * The observable only emits `undefined` once if mouse position
 * isn't supported (if it's a touch screen phone or tablet).
 */
export const mousePosition$ = fromEvent(globalThis, "resize").pipe(
  // eslint-disable-next-line unicorn/no-useless-undefined
  startWith(undefined),
  map(() => [window.innerWidth, window.innerHeight] as const),
  combineLatestWith(
    fromEvent<PointerEvent>(document, "pointermove").pipe(
      mergeWith(fromEvent<PointerEvent>(document, "pointerleave")),
      // eslint-disable-next-line unicorn/no-useless-undefined
      startWith(undefined),
      map(
        (event) =>
          [
            event?.clientX ?? window.innerWidth / 2,
            event?.clientY ?? window.innerHeight / 2,
            event?.type ?? "pointerleave",
            event?.pointerType,
          ] as const,
      ),
    ),
    fromEvent(document, "scroll").pipe(
      // eslint-disable-next-line unicorn/no-useless-undefined
      startWith(undefined),
      map(() => [window.scrollX, window.scrollY] as const),
    ),
  ),
  map(
    ([
      [innerWidth, innerHeight],
      [clientX, clientY, pointerEventType, pointerPointerType],
      [scrollX, scrollY],
    ]) => {
      if (
        pointerEventType === "pointerleave" ||
        pointerPointerType !== "mouse"
      ) {
        return;
      }
      const x = ((scrollX + clientX) / innerWidth) * 2 - 1;
      const y = ((scrollY + clientY) / innerHeight) * 2 - 1;
      return [x, y] as const;
    },
  ),
);
