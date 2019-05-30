import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";
import { useCount } from "../useCount";

const useExpandable: (
  opts: {
    initialLevel?: number;
    layout?: string[][];
  },
  callback?: (opts?: { level?: number; visibleSections?: string[] }) => void
) => [{ count: number; visibleSections: string[]; changeCount: () => void }] = (
  { initialLevel, layout = [] },
  callback = identity
) => {
  const initialCount = isNil(initialLevel)
    ? layout.length === 0
      ? 0
      : layout.length - 1
    : initialLevel;

  const { count: level, changeCount } = useCount(initialCount, layout.length);

  const visibleSections = layout[level] || [];

  useEffect(() => {
    callback({ level, visibleSections });
  }, [level]);

  return { level, visibleSections, changeLevel: changeCount };
};

export default useExpandable;
