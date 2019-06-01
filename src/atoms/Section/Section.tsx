import { ReactElement } from "react";
import styled from "styled-components";
import { Theme } from "types";
import { Direction } from "enums";

type SectionProps = {
  theme: Theme;
  direction?: Direction;
  name?: string;
};

const Section = styled.section.attrs(
  ({ theme, direction = Direction.HORIZONTAL, ...rest }: SectionProps) => {
    return {
      borderColor: theme.grayScale[1],
      borderTop: theme.borders[1],
      padding: `${theme.space[6]} ${theme.space[6]}`,
      flexDirection: direction === Direction.VERTICAL ? "column" : "row",
      alignItems: direction === Direction.VERTICAL ? "flex-start" : "center",
      justifyContent:
        direction === Direction.VERTICAL ? "flex-start" : "space-between"
    };
  }
)<SectionProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) => padding};
  border-top: ${({ borderTop }) => borderTop};
  border-color: ${({ borderColor }) => borderColor};
`;

export default Section;
