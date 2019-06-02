import { useCallback, useState, useEffect } from "react";
import { isNil, identity } from "ramda";
import { Direction } from "enums";

import useToggle from "../useToggle";

const useCount = ({
  initialCount = 0,
  maxCount = 5,
  minCount = 0,
  direction = Direction.UP,
  callback = identity
}) => {
  const [count, setCount] = useState(initialCount);
  const [isRewinding, setRewinding] = useState(false);

  const nextLevel = count + 1;
  const increase = useCallback(() => setCount(nextLevel), [count]);
  const previousLevel = count - 1;
  const decrease = useCallback(() => setCount(previousLevel), [count]);

  const reset = useCallback(() => {
    setCount(initialCount);
  }, []);

  const setMin = useCallback(() => {
    setCount(minCount);
  }, [count]);

  const setMax = useCallback(() => {
    setCount(maxCount);
  }, []);

  const rewind = useCallback(() => {
    !isRewinding ? setRewinding(true) : null;
  }, [isRewinding]);

  const cycleUp = nextLevel <= maxCount ? increase : rewind;
  const cycleDown = previousLevel >= minCount ? decrease : rewind;
  const cycle = direction === Direction.UP ? cycleUp : cycleDown;

  const controls = {
    reset,
    cycle,
    increase: nextLevel <= maxCount ? increase : null,
    decrease: previousLevel >= minCount ? decrease : null
  };

  useEffect(() => {
    if (direction === Direction.UP && count <= minCount) {
      return setRewinding(false);
    }

    if (direction === Direction.DOWN && count >= maxCount) {
      return setRewinding(false);
    }
    if (isRewinding) {
      return direction === Direction.UP ? decrease() : increase();
    }
    callback({ count, cycle });
  }, [count, isRewinding]);

  useEffect(() => {
    callback({ count, ...controls });
  }, [count]);

  return {
    count,
    ...controls
  };
};

export default useCount;
