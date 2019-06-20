import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import { Size, Direction } from "enums";
import SortHandlesWrapper from "./SortHandlesWrapper";

type SortHandlesProps = {
  remove: (index: number) => void;
  className?: string;
};

const SortHandles: FunctionComponent<SortHandlesProps> = ({
  remove,
  className
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
    <SortHandlesWrapper
      className={className}
      icons={icons}
      size={Size.LARGE}
      direction={Direction.VERTICAL}
    />
  );
};

export default styled(SortHandles)``;
