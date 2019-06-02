import styled from "styled-components";
import { Card, Section } from "atoms";

const FancyCardWrapper = styled(Card)`
  overflow: hidden;
  > div > * {
    &:first-child {
      > ${Section} {
        border-top: none;
      }
    }
  }
`;

export default FancyCardWrapper;
