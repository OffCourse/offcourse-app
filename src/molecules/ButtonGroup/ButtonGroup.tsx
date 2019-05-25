import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { map, addIndex, isEmpty } from "ramda";
import styled from "styled-components";
import { Button } from "atoms";
import { Size, Variant, Direction } from "enums";
import { Theme, Button as ButtonType } from "types";
const { SMALL, NORMAL, LARGE } = Size;
const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = Variant;
const mapIndexed = addIndex(map);

type ButtonGroupProps = {
  theme: Theme;
  direction?: Direction;
  size?: Size;
  variant?: Variant;
  buttons?: ButtonType[];
  children?: ReactNode[];
};

const createButton: (
  button: ButtonType,
  defaults: ButtonType,
  index: number
) => ReactNode = ({ title, size, variant, ...rest }, defaults, index) => (
  <Button
    size={size || defaults.size}
    variant={variant || defaults.variant}
    {...rest}
    key={index}
  >
    {title}
  </Button>
);

const ButtonGroup = styled.div.attrs(
  ({
    theme,
    children,
    size = Size.NORMAL,
    variant = Variant.DEFAULT,
    direction = Direction.HORIZONTAL,
    buttons = []
  }: ButtonGroupProps) => {
    const [noSpace, _, __, space] = theme.space;
    const isHorizontal = direction === Direction.HORIZONTAL;
    return {
      flexDirection: isHorizontal ? "row" : "column",
      marginRight: isHorizontal ? space : noSpace,
      marginBottom: isHorizontal ? noSpace : space,
      children: isEmpty(buttons)
        ? children
        : mapIndexed(
            (button, index) =>
              createButton(button, { size, variant }, index) as any,
            buttons
          )
    };
  }
)<ButtonGroupProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  ${Button} {
    margin-right: ${({ marginRight }) => marginRight};
    margin-bottom: ${({ marginBottom }) => marginBottom};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
      }
    }
  }
`;

export default ButtonGroup;
