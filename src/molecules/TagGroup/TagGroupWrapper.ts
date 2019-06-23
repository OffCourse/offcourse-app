import styled from "styled-components";
import { Tag } from "atoms";
import { Theme } from "types";

type TagGroupProps = {
  theme: Theme;
};

const TagGroupWrapper = styled.div<TagGroupProps>`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;

  ${Tag} {
    margin-right: ${({ theme }) => theme.space[3]};
    margin-bottom: ${({ theme }) => theme.space[3]};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default TagGroupWrapper;
