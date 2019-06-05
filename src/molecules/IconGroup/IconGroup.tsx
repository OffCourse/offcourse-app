import React, { FunctionComponent, Children, Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import IconGroupWrapper from "./IconGroupWrapper";
import { Icon } from "atoms";
import { Size, Direction } from "enums";

type IconType = {
  name: string;
  tabIndex?: number;
  onClick?: any;
};

type IconGroupProps = {
  icons: IconType[];
  direction: Direction.HORIZONTAL | Direction.VERTICAL;
  children?: any;
  size: Size;
  color: "string";
};

const IconGroup: FunctionComponent<IconGroupProps> = ({
  icons = [],
  direction = Direction.HORIZONTAL,
  children,
  size
}) => {
  if (isEmpty(icons)) {
    const renderedChildren = Children.map(children, child => {
      return React.cloneElement(child, {
        size,
        ...child.props
      });
    });

    return (
      <IconGroupWrapper direction={direction}>
        renderedChildren}
      </IconGroupWrapper>
    );
  }

  const renderedIcons = icons.map(({ name, tabIndex, onClick }, index) => (
    <Icon tabIndex={tabIndex} size={size} name={name} onClick={onClick} />
  ));

  return (
    <IconGroupWrapper direction={direction}>{renderedIcons}</IconGroupWrapper>
  );
};

export default IconGroup;
