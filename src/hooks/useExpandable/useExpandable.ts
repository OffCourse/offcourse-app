import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";
import useCount from "../useCount";

type UseExpandable = (opts: {
  initialLevel?: number;
  layout?: string[][];
}) => { level: number; visibleSections: string[]; cycle: () => void };

const useExpandable: UseExpandable = (
  { initialLevel, layout = [] },
  callback = identity
) => {
  const maxCount = layout.length > 0 ? layout.length - 1 : 0;
  const initialCount = initialLevel ? initialLevel : maxCount;

  const { count: level, cycle } = useCount({
    initialCount,
    maxCount
  });

  const visibleSections = layout[level] || [];

  useEffect(() => {
    callback({ level, visibleSections });
  }, [level]);

  return { level, visibleSections, cycle };
};

export default useExpandable;
