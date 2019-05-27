import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";

const useExpandable: (
  opts: {
    initialLevel?: number;
    layout: string[][];
  },
  callback?: (opts: { level: number; visibleSections: string[] }) => void
) => [number, () => void] = ({ initialLevel, layout }, callback = identity) => {
  const [level, setLevel] = useState(
    isNil(initialLevel) ? layout.length - 1 : initialLevel
  );
  const visibleSections = layout[level] || [];

  const changeLevel = useCallback(() => {
    const nextLevel = (level + 1) % layout.length || 0;
    setLevel(nextLevel);
  }, [level, layout]);

  useEffect(() => {
    callback({ level, visibleSections });
  }, [level]);

  return [level, changeLevel];
};

export default useExpandable;
