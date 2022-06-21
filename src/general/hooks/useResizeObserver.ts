import { useLayoutEffect } from "react";

export const useResizeObserver = (
  callBack: (entries: ResizeObserverEntry[]) => void,
  element?: HTMLElement | null,
  dependence: any[] = [],
) => {
  useLayoutEffect(() => {
    if (!element) {
      return;
    }
    const resizeObserver = new ResizeObserver(callBack);
    resizeObserver.observe(element);

    return () => {
      element && resizeObserver.unobserve(element);
    };
  }, [...dependence, element]);
};
