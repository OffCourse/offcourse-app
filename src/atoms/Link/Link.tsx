import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { formatTitle } from "../helpers";
import LinkWrapper from "./LinkWrapper";
import { Direction, Variant, Size, ErrorState } from "enums";

type LinkProps = {
  size?: Size;
  isBasic?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  href?: string;
  children: string;
  onClick?: any;
};

const Link: FunctionComponent<LinkProps> = ({
  size = Size.NORMAL,
  isBasic = false,
  isActive = false,
  isDisabled = false,
  href,
  children,
  onClick
}) => (
  <LinkWrapper
    size={size}
    onClick={!isDisabled ? onClick : identity}
    href={!isDisabled ? href : undefined}
    isDisabled={isDisabled}
    isActive={isActive}
    isBasic={isBasic}
  >
    {formatTitle(children)}
  </LinkWrapper>
);

export default Link;
