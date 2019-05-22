import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";
import { Variant, Size } from "enums";

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: string | null;
  tabindex?: number;
  variant?: Variant;
  size?: Size;
  isSubmit?: boolean;
  children: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  href,
  tabindex = 1,
  variant = Variant.DEFAULT,
  isSubmit = false,
  size = Size.NORMAL
}) => {
  const buttonType = isSubmit ? "submit" : "button";
  const label: string = formatTitle(children);
  return (
    <ButtonWrapper
      as={href ? "a" : "button"}
      variant={variant}
      type={buttonType}
      disabled={variant === Variant.DISABLED}
      onClick={onClick}
      tabIndex={tabindex}
      size={size}
      href={variant === Variant.DISABLED ? null : href}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
