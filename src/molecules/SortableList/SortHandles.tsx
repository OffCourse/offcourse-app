import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import { Size, Direction } from "enums";
import IconGroup from "../IconGroup";
import SortHandlesWrapper from "./SortHandlesWrapper";

type SortHandlesProps = {
  remove: (index: number) => void;
  className?: string;
};

const SortHandles: FunctionComponent<SortHandlesProps> = ({
  remove,
  className,
  ...rest
}) => {
  const icons = [
    {
      is: "button",
      onClick: remove,
      name: "remove",
      tabIndex: -1
    },
    { is: "button", name: "sort", tabIndex: -1, onClick: identity }
  ];
  return (
    <SortHandlesWrapper {...rest}>
      <IconGroup
        className={className}
        icons={icons}
        size={Size.LARGE}
        direction={Direction.VERTICAL}
      />
    </SortHandlesWrapper>
  );
};

export default styled(SortHandles)``;
