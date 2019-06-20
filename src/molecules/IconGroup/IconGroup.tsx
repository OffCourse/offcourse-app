import React, { FunctionComponent, Children, Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import IconGroupWrapper from "./IconGroupWrapper";
import { Icon } from "atoms";
import { Variant, Size, Direction } from "enums";

type IconType = {
  name: string;
  tabIndex?: number;
  onClick?: any;
  variant?: Variant;
};

type IconGroupProps = {
  icons: IconType[];
  direction?: Direction.HORIZONTAL | Direction.VERTICAL;
  children?: any;
  size?: Size;
  className?: string;
};

const IconGroup: FunctionComponent<IconGroupProps> = ({
  icons = [],
  className,
  direction = Direction.HORIZONTAL,
  children,
  size = Size.NORMAL
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

  const renderedIcons = icons.map(
    ({ name, tabIndex, onClick, variant }, index) => (
      <Icon
        tabIndex={tabIndex}
        key={index}
        size={size}
        name={name}
        onClick={onClick}
        variant={variant}
      />
    )
  );

  return (
    <IconGroupWrapper className={className} direction={direction}>
      {renderedIcons}
    </IconGroupWrapper>
  );
};

export default styled(IconGroup)``;
