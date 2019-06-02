import { ReactElement } from "react";
import styled from "styled-components";
import { Theme } from "types";
import { Direction } from "enums";

type SectionProps = {
  theme: Theme;
  direction?: Direction;
  name?: string;
};

const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: ${({ direction = Direction.HORIZONTAL }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  align-items: ${({ direction }) =>
    direction === Direction.VERTICAL ? "flex-start" : "center"};
  justify-content: ${({ direction }) =>
    direction === Direction.VERTICAL ? "flex-start" : "space-between"};
  padding: ${({ theme }) => `${theme.space[6]} ${theme.space[6]}`};
  border-top: ${({ theme }) => theme.borders[1]};
  border-color: ${({ theme }) => theme.grayScale[1]};
`;

export default Section;
