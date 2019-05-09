import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons";
import IconWrapper from "./IconWrapper";
import { Size } from "enums";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = Size;

const iconProps = {
  SMALL: { iconSize: "xs" },
  NORMAL: { iconSize: "1x" },
  LARGE: { iconSize: "lg" },
  EXTRA_LARGE: { iconSize: "2x" }
};

type IconProps =  {
  name: string;
  size?: Size;
  color?: string;
  tabIndex?: number;
  is?: "i" | "a" | "button";
  onClick?: (event: MouseEvent<any>) => void;
  href?: string;
  mx?: number;
}

const Icon: FunctionComponent<IconProps> = ({ size = Size.NORMAL, name, color, tabIndex = 0, href, is, onClick, mx = 0}) => {
  const { iconSize } = iconProps[size];
  return (
    <IconWrapper
      as={is || (href && "a") || (onClick && "button")}
      type={(is === "button" && "button") || (onClick && "button")}
      mx={mx}
      color={color}
      tabIndex={tabIndex}
      href={href}
      target="_blank"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icons[name]} size={iconSize} />
    </IconWrapper>
  );
};

export default Icon;
