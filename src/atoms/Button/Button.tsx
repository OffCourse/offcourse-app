import React, { FunctionComponent, MouseEvent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import { Variant, Size } from "enums";
import { Button as ButtonType } from "types";

import { formatTitle } from "../helpers";
import ButtonWrapper from "./ButtonWrapper";

type ButtonProps = ButtonType & {
  className?: string;
  children: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  href,
  size = Size.NORMAL,
  onClick,
  variant = Variant.DEFAULT,
  isSubmit = false,
  tabIndex = 1
}) => {
  const isClickable = !!(onClick || href);
  const isDisabled = variant === Variant.DISABLED || !isClickable;
  return (
    <ButtonWrapper
      as={href ? "a" : "button"}
      type={isSubmit ? "submit" : "button"}
      href={isDisabled ? null : href}
      tabIndex={tabIndex}
      onClick={!isDisabled && onClick ? onClick : identity}
      isDisabled={isDisabled || !isClickable}
      variant={isDisabled ? Variant.DISABLED : variant}
      className={className}
      size={size}
    >
      {formatTitle(children)}
    </ButtonWrapper>
  );
};

export default styled(Button)``;
