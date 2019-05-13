import styled from "styled-components";

const LabelWrapper = styled.div`
  padding: 0;
  margin: 0;
  font-weight: 700,
  display: block;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  userSelect: none;
`;

export default LabelWrapper;
