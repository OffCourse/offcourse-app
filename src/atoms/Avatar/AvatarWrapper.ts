import styled from "styled-components";

const AvatarWrapper = styled.div<{ variant: string; multiply: number }>`
  height: ${({ theme, multiply, variant }) =>
    theme.avatars[variant].dimensions.height * multiply}rem;
  width: ${({ theme, multiply, variant }) =>
    theme.avatars[variant].dimensions.width * multiply}rem;
  background: url(${({ theme, variant }) => theme.avatars[variant].svg})
    no-repeat top left;
  background-color: ${({ theme, variant }) =>
    theme.avatars[variant].background};
  background-size: contain;
  box-sizing: border-box;
`;

export default AvatarWrapper;
