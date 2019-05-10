import styled from "styled-components";
import { Direction, Alignment } from "enums";

const returnAlign: (args: {
  direction: Direction;
  alignment: Alignment[];
}) => "space-between" | "flex-start" = ({ direction, alignment }) => {
  const index = direction === Direction.HORIZONTAL ? 1 : 0;
  switch (alignment[index]) {
    case Alignment.FULL:
      return "space-between";
    default:
      return "flex-start";
  }
};

const returnJustify: (args: {
  direction: Direction;
  alignment: Alignment[];
}) => "space-between" | "flex-start" = ({ direction, alignment }) => {
  const index = direction === Direction.HORIZONTAL ? 0 : 1;
  switch (alignment[index]) {
    case Alignment.FULL:
      return "space-between";
    default:
      return "flex-start";
  }
};

const Group = styled.div<{
  direction?: Direction;
  alignment?: Alignment[];
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  align-content: ${({ direction, alignment }) =>
    returnAlign({ direction: direction!, alignment: alignment! })};
  justify-content: ${({ direction, alignment }) =>
    returnJustify({ direction: direction!, alignment: alignment! })};
  max-width: 100vw;
  height: 700px;
  flex: 1;
`;

Group.defaultProps = {
  direction: Direction.HORIZONTAL,
  alignment: [Alignment.FULL, Alignment.FULL]
};

export default Group;
