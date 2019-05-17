import React, { FunctionComponent } from "react";
import { useToggle } from "hooks";
import { Size } from "enums";

import Icon from "../Icon";
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
  const [checked, setChecked] = useToggle(isChecked, onToggle);
  return (
    <CheckboxWrapper size={size} onClick={setChecked}>
      <input type="checkbox" readOnly checked={checked} />
      <label>
        <Icon size={size} name="checkmark" />
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
