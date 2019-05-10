import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useEffect
} from "react";
import Icon from "../Icon";
import { Size } from "enums";

import CheckboxWrapper from "./CheckboxWrapper";

type CheckboxProps = {
  size?: Size.NORMAL | Size.LARGE;
  isChecked?: boolean;
  onToggle?: (opts: { checked: boolean }) => void;
};

const Checkbox: FunctionComponent<CheckboxProps> = ({
  size = Size.NORMAL,
  isChecked = false,
  onToggle = () => null
}) => {
  const [checked, setChecked] = useState(isChecked);
  const handleClick: (event: MouseEvent<HTMLDivElement>) => void = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setChecked(c => !c);
  };

  useEffect(() => {
    onToggle({ checked });
  });

  return (
    <CheckboxWrapper size={size} onClick={handleClick}>
      <input type="checkbox" readOnly checked={checked} />
      <label>
        <Icon size={size} name="checkmark" />
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
