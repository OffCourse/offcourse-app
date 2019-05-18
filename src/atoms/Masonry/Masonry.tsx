import React, { FunctionComponent, ReactNode } from "react";
import { identity } from "ramda";
import { MasonryWrapper } from "./MasonryWrapper";
import Grid from "./Grid";
import { useMasonry } from "hooks";

type MasonryProps = {
  breakpoints?: number[];
  onResize?: (opts: { width: number; numberOfColumns: number }) => void;
  children: ReactNode[];
};

const Masonry: FunctionComponent<MasonryProps> = ({
  onResize = identity,
  children = [],
  breakpoints = []
}) => {
  const { ref, grid } = useMasonry(breakpoints, children, onResize);
  return (
    <MasonryWrapper ref={ref}>
      <Grid grid={grid} />
    </MasonryWrapper>
  );
};

export default Masonry;
