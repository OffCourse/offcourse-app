import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ListItem } from "atoms";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${ListItem} {
    margin-bottom: ${({ theme }) => theme.space[4]};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
      }
    }
  }
`;

export default List;
