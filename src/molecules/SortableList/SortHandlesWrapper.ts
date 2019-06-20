import styled from "styled-components";
import IconGroup from "../IconGroup";
import { Icon } from "atoms";

const SortHandlesWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.space[0]};
  justify-content: center;

  ${Icon} {
    color: ${({ theme }) => theme.grayScale[2]};
    margin-bottom: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-bottom: ${({ theme }) => theme.space[0]};
    }
  }
`;

export default SortHandlesWrapper;
