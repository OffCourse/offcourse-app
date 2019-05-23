import styled from "styled-components";
import { Link } from "atoms";

const BreadcrumbsWrapper = styled.div`
  display: flex;
  flexdirection: column;
  alignitems: flex-start;
  justifycontent: flex-start;
  maxwidth: 100vw;
  flex: 1;
  ${Link} {
    margin-right: 0.5rem;
  }
`;

export default BreadcrumbsWrapper;
