import React, { FunctionComponent } from "react";
import { identity } from "ramda";
import { formatTitle } from "../helpers";
import styled from "styled-components";
import { Direction, Variant, Size, ErrorState } from "enums";
import { Link as LinkType } from "types";
import LinkWrapper from "./LinkWrapper";

type LinkProps = LinkType & {
  className?: string;
  children: string;
  isBasic?: boolean;
  isActive?: boolean;
};

const Link: FunctionComponent<LinkProps> = ({
  children,
  className,
  href,
  size = Size.NORMAL,
  onClick,
  variant = Variant.DEFAULT,
  tabIndex = 1,
  isBasic = false,
  isActive = false
}) => {
  const isDisabled = variant === Variant.DISABLED;
  return (
    <LinkWrapper
      as={href ? "a" : "button"}
      href={isDisabled ? undefined : href}
      onClick={isDisabled ? identity : onClick}
      isActive={isActive}
      isBasic={isBasic}
      isDisabled={isDisabled}
      tabIndex={tabIndex}
      variant={variant}
      className={className}
      size={size}
    >
      {formatTitle(children)}
    </LinkWrapper>
  );
};

export default styled(Link)``;
