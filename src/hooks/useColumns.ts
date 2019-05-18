import { useState, useRef, useEffect } from "react";
import { reduceWhile, inc, identity } from "ramda";
import useSize from "./useSize";

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
  onResize?: (opts: { width: number; numberOfColumns: number }) => void
) => { ref: any; numberOfColumns: number; width: number; height: number } = (
  breakpoints,
  onResize
) => {
  const [numberOfColumns, setNumberOfColumns] = useState(1);
  const { width, height, ref } = useSize();

  useEffect(() => {
    const proposal = getNumberOfColumns(width, breakpoints);
    setNumberOfColumns(proposal);
  }, [width]);

  useEffect(() => {
    if (!onResize) {
      return;
    }
    onResize({ width, numberOfColumns });
  }, [numberOfColumns]);

  return { ref, numberOfColumns, width, height };
};

export default useColumns;
