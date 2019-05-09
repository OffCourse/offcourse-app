import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useEffect
} from "react";
import PropTypes from "prop-types";
import { Icon } from "..";
import CheckboxWrapper from "./CheckboxWrapper";
import LabelWrapper from "./LabelWrapper";
import { Size } from "enums";

const { NORMAL, LARGE } = Size;

const boxProps: any = {
  NORMAL: { boxSize: "1.25rem", labelSize: "1rem" },
  LARGE: { boxSize: "1.66666667rem", labelSize: "1.333333rem" }
};

type CheckboxProps = {
  size?: Size.NORMAL | Size.LARGE;
  bg?: string | string[];
  isChecked?: boolean;
  onToggle: (opts: { checked: true | false }) => void;
};

const Checkbox: FunctionComponent<CheckboxProps> = ({
  size = Size.NORMAL,
  bg,
  isChecked = false,
  onToggle
}) => {
  const [checked, setChecked] = useState(isChecked);
  const { boxSize, labelSize } = boxProps[size];
  const handleClick: (event: MouseEvent<HTMLDivElement>) => void = e => {
    e.preventDefault();
    e.stopPropagation();
    setChecked(c => !c);
  };

  useEffect(() => {
    onToggle({ checked });
  });

  return (
    <CheckboxWrapper size={boxSize} bg={bg} onClick={handleClick}>
      <input type="checkbox" readOnly checked={checked} />
      <LabelWrapper bg={bg} size={labelSize}>
        <Icon size={size} name="checkmark" />
      </LabelWrapper>
    </CheckboxWrapper>
  );
};

export default Checkbox;
