import React, { FunctionComponent, MouseEvent } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";
import { Variant, Size } from "enums";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = Size;

const textProps = {
  SMALL: { fontSize: 2, lineHeight: 1 },
  NORMAL: { fontSize: 3, lineHeight: 2 },
  LARGE: { fontSize: 4, lineHeight: 4 },
  EXTRA_LARGE: { fontSize: "4rem", lineHeight: "4.5rem" }
};

type HeadingProps = {
  onClick?: (args: { href: string | undefined }) => void;
  variant?: Variant.DISABLED | Variant.DEFAULT;
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
  const { fontSize, lineHeight } = textProps[size];
  const handleClick: (event: MouseEvent<HTMLElement>) => void = event => {
    if (onClick) {
      event.preventDefault();
      onClick({ href });
    }
  };
  return (
    <HeadingWrapper
      is={href ? "a" : "h1"}
      color={variant === Variant.DISABLED ? "grayScale.2" : "black"}
      onClick={handleClick}
      href={href}
      lineHeight={lineHeight}
      fontSize={fontSize}
    >
      {formatTitle(children)}
    </HeadingWrapper>
  );
};

export default Heading;
