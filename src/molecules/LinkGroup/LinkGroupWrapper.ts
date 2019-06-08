import styled from "styled-components";
import { Link } from "atoms";
import { Theme } from "types";

type LinkWrapperProps = {
  theme: Theme;
  isHorizontal: boolean;
};

const LinkWrapper = styled.div<LinkWrapperProps>`
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? "row" : "column")};
  display: flex;
  align-items: flex-start;
  ${Link} {
    margin-right: ${({ theme, isHorizontal }) =>
      isHorizontal ? theme.space[6] : 0};
    margin-bottom: ${({ theme, isHorizontal }) =>
      isHorizontal ? theme.space[6] : 0};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

export default LinkWrapper;
