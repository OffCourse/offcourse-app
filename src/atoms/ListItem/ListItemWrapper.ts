import styled from "styled-components";
import { Theme } from "types";
import { Link } from "atoms";
import { Variant } from "enums";

type ListItemWrapperProps = {
  theme: Theme;
  isLink?: boolean;
};

const ListItemWrapper = styled.li<ListItemWrapperProps>`
  display: grid;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[4]}`};
  background-color: ${({ theme }) => theme.grayScale[1]};
  color: ${({ theme }) => theme.grayScale[4]};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};

  user-select: none;

  :hover {
    background: ${({ theme }) => theme.colors[Variant.POSITIVE]};
    color: ${({ theme }) => theme.grayScale[0]};
    > ${Link} {
      color: ${({ theme }) => theme.grayScale[0]};
    }
  }

  > ${Link} {
    font-family: ${({ theme }) => theme.fonts.bold};
  }
`;

export default ListItemWrapper;
