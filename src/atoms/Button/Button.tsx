import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";
import { Variant, Size } from "../enums";

const { DEFAULT } = Variant;
const { SMALL, NORMAL, LARGE } = Size;

const widths = {
  SMALL: "5.33333rem",
  NORMAL: "8rem",
  LARGE: ["100%", "16rem", "16rem"]
};

type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: string | null;
  mt?: number | null;
  tabindex?: number;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  isSubmit?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  href = null,
  mt = null,
  tabindex = 1,
  variant = DEFAULT,
  isSubmit = false,
  disabled = false,
  size = NORMAL
}): any => {
  const buttonType: string = isSubmit ? "submit" : "button";
  const label: string = formatTitle(children);
  return (
    <ButtonWrapper
      mt={mt}
      variant={disabled ? "DISABLED" : variant}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabindex || 1}
      width={widths[size]}
    >
      {href ? <a href={!disabled ? href : undefined}>{label}</a> : label}
    </ButtonWrapper>
  );
};

export default Button;
