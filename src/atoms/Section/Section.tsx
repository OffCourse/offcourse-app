import system from "system-components";
import styled from "styled-components";
import { Theme } from "types";

type SectionProps = {
  theme: Theme;
};

const Section = styled.section.attrs(({ theme }: SectionProps) => {
  return {
    borderColor: theme.grayScale[1],
    borderBottom: theme.borders[1],
    padding: `${theme.space[6]} ${theme.space[6]}`
  };
})<SectionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: ${({ padding }) => padding};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-color: ${({ borderColor }) => borderColor};
`;

export default Section;
