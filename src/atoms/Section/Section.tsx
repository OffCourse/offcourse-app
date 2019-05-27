import system from "system-components";
import styled from "styled-components";
import { Theme } from "types";
import { Direction } from "enums";

type SectionProps = {
  theme: Theme;
  direction: Direction;
};

const Section = styled.section.attrs(
  ({ theme, direction = Direction.HORIZONTAL }: SectionProps) => {
    return {
      borderColor: theme.grayScale[1],
      borderBottom: theme.borders[1],
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
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-color: ${({ borderColor }) => borderColor};
`;

export default Section;
