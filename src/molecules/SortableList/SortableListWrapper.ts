import styled from "styled-components";
import { DragItem, ListItem } from "atoms";
import List from "../List";

const SortableListWrapper = styled(List)`
  ${ListItem} :last-child {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  ${DragItem} :last-child {
    ${ListItem} :last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

export default SortableListWrapper;
