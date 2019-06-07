import styled from "styled-components";
import { Label } from "atoms";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  .handlers {
    grid-area: input;
  }

  ${Label} {
    padding: 0 ${({ theme }) => theme.space[6]};
    padding-bottom: ${({ theme }) => theme.space[4]};
  }
`;
