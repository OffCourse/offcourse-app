import styled from "styled-components";
import { Direction } from "enums";

const Container = styled.div<{
  direction: Direction;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  margin-top: 2rem;
  margin-right: 2rem;
  > * {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Container;
