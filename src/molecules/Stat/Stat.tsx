import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Icon, Label } from "atoms";
import { Variant, Direction, Size } from "enums";
import StatWrapper from "./StatWrapper";

type StatProps = {
  direction?: Direction.HORIZONTAL | Direction.VERTICAL;
  variant?: Variant.DEFAULT | Variant.NEGATIVE;
  iconName: string;
  label: string;
};

const Stat: FunctionComponent<StatProps> = ({
  direction = Direction.HORIZONTAL,
  variant = Variant.DEFAULT,
  iconName,
  label
}) => {
  return (
    <StatWrapper
      isHorizontal={direction === Direction.HORIZONTAL}
      isNegative={variant === Variant.NEGATIVE}
    >
      <Icon size={Size.LARGE} name={iconName} />
      <Label>{`${label}`}</Label>
    </StatWrapper>
  );
};

export default styled(Stat)``;
