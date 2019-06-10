import styled from "styled-components";
import { ListItem } from "atoms";

export default styled.ul`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  margin: 0;
  padding: 0;

  ${ListItem} {
    margin-bottom: ${({ theme }) => theme.space[4]};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
      }
    }
  }
`;
