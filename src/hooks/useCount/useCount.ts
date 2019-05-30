import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";

type useExpandableOpts = {};

const useCount = (initialCount = 0, maxCount = 5) => {
  const [count, setCount] = useState(initialCount);

  const nextLevel = count + 1;
  const increase = useCallback(() => setCount(nextLevel), [count]);
  const previousLevel = count - 1;
  const decrease = useCallback(() => setCount(previousLevel), [count]);


  const changeCount = useCallback(() => {
    setCount(nextLevel % (maxCount + 1));
  }, [count]);
  return {
    count,
    changeCount,
    increase: nextLevel <= maxCount ? increase : null,
    decrease: previousLevel >= 0 ? decrease : null
  };
};

export default useCount;
