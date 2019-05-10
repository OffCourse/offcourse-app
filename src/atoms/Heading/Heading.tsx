import React, { FunctionComponent, MouseEvent } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";
import { Variant, Size } from "enums";

type HeadingProps = {
  onClick?: (args: { href: string | undefined }) => void;
  variant?: Variant;
  children: string;
  href?: string;
  size?: Size;
};

const Heading: FunctionComponent<HeadingProps> = ({
  variant = Variant.DEFAULT,
  children,
  onClick,
  href,
  size = Size.NORMAL
}) => {
  const isActive = variant !== Variant.DISABLED;
  const handleClick: (
    event: MouseEvent<HTMLHeadingElement>
  ) => void = event => {
    if (onClick) {
      event.preventDefault();
      onClick({ href });
    }
  };
  return (
    <HeadingWrapper
      as={href ? "a" : "h1"}
      isActive={isActive}
      onClick={isActive ? handleClick : undefined}
      href={isActive ? href : undefined}
      size={size}
    >
      {formatTitle(children)}
    </HeadingWrapper>
  );
};

export default Heading;
