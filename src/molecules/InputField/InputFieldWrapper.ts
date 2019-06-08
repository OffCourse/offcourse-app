import styled from "styled-components";
import { Label } from "atoms";
import MessageGroup from "../MessageGroup";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  .handlers {
    grid-area: input;
  }

  ${MessageGroup} {
    padding-bottom: ${({ theme }) => theme.space[4]};
  }

  ${Label} {
    padding: 0 ${({ theme }) => theme.space[6]};
    padding-bottom: ${({ theme }) => theme.space[4]};
  }
`;
