import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";
import { Direction } from "enums";

type useExpandableOpts = {};
import useToggle from "../useToggle";

const useCount = ({
  initialCount = 0,
  maxCount = 5,
  minCount = 0,
  direction = Direction.UP
}) => {
  const [count, setCount] = useState(initialCount);
  const [checked, toggle] = useToggle(true);

  const nextLevel = count + 1;
  const increase = useCallback(() => setCount(nextLevel), [count]);
  const previousLevel = count - 1;
  const decrease = useCallback(() => setCount(previousLevel), [count]);

  const reset = useCallback(() => {
    setCount(initialCount);
  }, []);

  const setMin = useCallback(() => {
    setCount(minCount);
  }, []);

  const setMax = useCallback(() => {
    setCount(maxCount);
  }, []);

  const cycleUp = nextLevel <= maxCount ? increase : setMin;
  const cycleDown = previousLevel >= minCount ? decrease : setMax;

  return {
    count,
    cycle: direction === Direction.UP ? cycleUp : cycleDown,
    reset,
    increase: nextLevel <= maxCount ? increase : null,
    decrease: previousLevel >= minCount ? decrease : null
  };
};

export default useCount;
