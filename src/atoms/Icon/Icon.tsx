import React, { FunctionComponent, MouseEvent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons";
import IconWrapper from "./IconWrapper";
import { Size, Variant } from "enums";

const iconProps = {
  [Size.SMALL]: { iconSize: "xs" },
  [Size.NORMAL]: { iconSize: "1x" },
  [Size.LARGE]: { iconSize: "lg" },
  [Size.EXTRA_LARGE]: { iconSize: "2x" }
};

type IconProps = {
  className?: string;
  name: string;
  size?: Size;
  variant?: Variant;
  tabIndex?: number;
  href?: string;
  onClick?: (event: MouseEvent<any>) => void;
};

const Icon: FunctionComponent<IconProps> = ({
  className,
  size = Size.NORMAL,
  name,
  variant = Variant.DEFAULT,
  tabIndex = 0,
  href,
  onClick
}) => {
  const iconName = icons[name];
  const { iconSize } = iconProps[size];
  return (
    <IconWrapper
      className={className}
      as={(href && "a") || (onClick && "button")}
      type={onClick && "button"}
      variant={variant}
      tabIndex={tabIndex}
      href={href}
      target="_blank"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={iconName} size={iconSize} />
    </IconWrapper>
  );
};

export default styled(Icon)``;
