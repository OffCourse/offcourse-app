import styled from "styled-components";
import { ListItem } from "atoms";
import List from "../List";
import DragItem from "./DragItem";

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
