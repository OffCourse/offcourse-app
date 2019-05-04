import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";
import { Variant, Size } from "../enums";

const { DISABLED, DEFAULT } = Variant;
const { NORMAL } = Size;

type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: string | null;
  tabindex?: number;
  variant?: Variant;
  size: Size;
  disabled?: boolean;
  isSubmit?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  href = null,
  tabindex = 1,
  variant = DEFAULT,
  isSubmit = false,
  disabled = false,
  size = NORMAL
}) => {
  const buttonType = isSubmit ? "submit" : "button";
  const label: string = formatTitle(children as string);
  return (
    <ButtonWrapper
      variant={disabled ? DISABLED : variant}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabindex || 1}
      size={size}
    >
      {href ? <a href={!disabled ? href : undefined}>{label}</a> : label}
    </ButtonWrapper>
  );
};

export default Button;
