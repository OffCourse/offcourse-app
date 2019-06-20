import styled from "styled-components";
import { Input } from "atoms";

const MultiInput = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.grayScale[1]};
  > ${Input} {
    margin-bottom: ${({ theme }) => theme.space[0]};
  }
`;

export default MultiInput;
