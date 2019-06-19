import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import IconGroup from "../IconGroup";
import { Size, Direction } from "enums";

const Handles = ({ remove, index, className }) => {
  const icons = [
    {
      is: "button",
      onClick: () => remove(index),
      name: "remove",
      tabIndex: -1
    },
    { is: "button", name: "sort", tabIndex: -1, onClick: identity }
  ];
  return (
    <IconGroup
      className={className}
      icons={icons}
      direction={Direction.VERTICAL}
      size={Size.NORMAL}
    />
  );
};

export default styled(Handles)``;
