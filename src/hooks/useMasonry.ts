import { ReactNode, useMemo } from "react";
import useColumns from "./useColumns";
import { append, adjust, repeat, reduce, addIndex } from "ramda";

const reduceIndexed: (x: any, y: any, z: any) => any = addIndex(reduce);

const prepareGrid: (items: ReactNode[], numberOfColumns: number) => any[] = (
  items,
  numberOfColumns
) => {
  const grid = reduceIndexed(
    (acc: any[], item: ReactNode, index: number) => {
      const addElement = append(item);
      const columnNumber = index % numberOfColumns;
      return adjust(columnNumber, addElement as any, acc);
    },
    repeat([], numberOfColumns),
    items
  );
  return grid;
};

const useMasonry: (
  breakpoints: number[],
  children: ReactNode[],
  onResize: (opts: { width: number; numberOfColumns: number }) => void
) => { ref: any; grid: ReactNode[]; width: number; height: number } = (
  breakpoints,
  children,
  onResize
) => {
  const { ref, width, height, numberOfColumns } = useColumns(
    breakpoints,
    onResize
  );
  const grid = useMemo(() => prepareGrid(children, numberOfColumns), [
    children,
    numberOfColumns
  ]);
  return {ref, grid, width, height };
};

export default useMasonry;
