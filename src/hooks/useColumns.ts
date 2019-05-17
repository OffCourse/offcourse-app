import { useState, useRef, useEffect } from "react";
import { reduceWhile, inc, identity } from "ramda";

const getNumberOfColumns: (
  containerWidth: number,
  breakpoints: number[]
) => number = (containerWidth, breakpoints) => {
  return reduceWhile(
    (_, breakpoint) => breakpoint < containerWidth,
    inc,
    1,
    breakpoints
  );
};

const useColumns: (
  breakpoints: number[],
  onResize: (opts: { width: number; numberOfColumns: number }) => void
) => [any, number] = (breakpoints, onResize) => {
  const [numberOfColumns, setNumberOfColumns] = useState(1);
  const [width, setWidth] = useState(0);
  const masonryRef = useRef<HTMLElement>(null);

  const handleResize = () => {
    if (masonryRef && masonryRef.current) {
      const { offsetWidth } = masonryRef.current;
      const proposal = getNumberOfColumns(offsetWidth, breakpoints);
      setWidth(offsetWidth);
      setNumberOfColumns(proposal);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    onResize({ width, numberOfColumns });
  }, [width, numberOfColumns]);

  return [masonryRef, numberOfColumns];
};

export default useColumns;
