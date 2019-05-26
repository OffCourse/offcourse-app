import React, { FunctionComponent, MouseEvent } from "react";
import { identity } from "ramda";
import { formatTitle } from "../helpers";
import { Variant, Size } from "enums";
import ButtonWrapper from "./ButtonWrapper";
import { Button as ButtonType } from "types";
import styled from "styled-components";

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
  const isDisabled = variant === Variant.DISABLED;
  return (
    <ButtonWrapper
      as={href ? "a" : "button"}
      type={isSubmit ? "submit" : "button"}
      href={isDisabled ? null : href}
      tabIndex={tabIndex}
      onClick={isDisabled ? identity : onClick}
      isDisabled={isDisabled}
      variant={variant}
      className={className}
      size={size}
    >
      {formatTitle(children)}
    </ButtonWrapper>
  );
};

export default styled(Button)``;
