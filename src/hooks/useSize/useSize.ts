import { useState, useRef, useEffect, useCallback } from "react";

const useSize: (
  onResize?: (opts: { width: number; height: number }) => void
) => { width: number; height: number; ref: any } = onResize => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const handleResize = useCallback(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setWidth(offsetWidth);
      setHeight(offsetHeight);
    }
  }, [ref]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!onResize) {
      return;
    }
    onResize({ width, height });
  }, [width, height]);

  return { width, height, ref };
};

export default useSize;
