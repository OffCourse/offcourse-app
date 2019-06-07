import styled from "styled-components";
import { Variant } from "enums";

type LabelWrapperProps = {
  variant: Variant.DEFAULT | Variant.DISABLED;
  htmlFor: string;
};

const LabelWrapper = styled.div<LabelWrapperProps>`
  padding: 0;
  margin: 0;
  font-weight: 700,
  display: block;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, variant }) =>
    variant === Variant.DISABLED ? theme.grayScale[2] : theme.colors.black};
  userSelect: none;
`;

export default LabelWrapper;
