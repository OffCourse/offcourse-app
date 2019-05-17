import React, { MouseEvent, useState, useEffect } from "react";
const useToggle: (
  isChecked: boolean,
  callback: (opts: { checked: boolean }) => void
) => [boolean, any] = (isChecked, callback) => {
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
