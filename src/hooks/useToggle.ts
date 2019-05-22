import React, { MouseEvent, useState, useEffect } from "react";
import identity from "ramda";

const useToggle: (
  isChecked: boolean,
  callback?: (opts: { checked: boolean }) => void
) => [boolean, any] = (isChecked, callback = ({ checked }) => null) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    callback({ checked });
  }, [checked]);

  const handleClick: (event: MouseEvent<HTMLDivElement>) => void = e => {
    e.preventDefault();
    e.stopPropagation();
    setChecked((c: boolean) => !c);
  };

  return [checked, handleClick];
};

export default useToggle;
