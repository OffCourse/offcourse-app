import styled from "styled-components";
import LinkGroup from "../LinkGroup";
import { Input, DragItem } from "atoms";

const InputListWrapper = styled.div`
 ${DragItem} > ${Input} {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  ${DragItem} :last-child ${Input} {
    margin-bottom: ${({ theme }) => theme.space[0]};
  }

  ${LinkGroup} {
    justify-content: flex-end;
    padding-top: ${({ theme }) => theme.space[6]};
    padding-right: ${({ theme }) => theme.space[6]};
  }
`;

export default InputListWrapper;
