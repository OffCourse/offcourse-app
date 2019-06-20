import styled from "styled-components";
import { Input, ListItem } from "atoms";
import List from "../List";
import LinkGroup from "../LinkGroup";
import SortHandles from "./SortHandles";
import DragItemWrapper from "./DragItemWrapper";

const SortableListWrapper = styled.div`
  ${DragItemWrapper} {
    display: flex;
    background-color: ${({ theme }) => theme.grayScale[1]};
    margin-bottom: ${({ theme }) => theme.space[4]};

    ${ListItem}, ${Input} {
      flex: 1;
    }

    ${SortHandles} {
      padding: ${({ theme }) => theme.space[6]};
    }

    &:last-child {
        margin-bottom: 0;
      }
    }
  }
  ${LinkGroup} {
    justify-content: flex-end;
    padding-top: ${({ theme }) => theme.space[4]};
    padding-right: ${({ theme }) => theme.space[6]};
  }
`;

export default SortableListWrapper;
