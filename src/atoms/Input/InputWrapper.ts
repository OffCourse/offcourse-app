import styled from "styled-components";
import { Variant, Size } from "enums";

const InputWrapper = styled.div<{
  hasErrors: boolean;
  isDisabled: boolean;
  size: Size.SMALL | Size.NORMAL;
}>`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]} 0;
  border: ${({ theme, hasErrors }) =>
    hasErrors ? theme.borders[2] : theme.borders[0]};
  margin: 0;
  box-sizing: border-box;
  grid-template-areas: "input";
  border-color: ${({ theme }) => theme.colors[Variant.NEGATIVE]};
  background-color: ${({ theme }) => theme.grayScale[1]};

  .icons,
  button {
    padding: 0;
    background-color: rgba(255, 255, 255, 0);
    color: ${({ theme }) => theme.grayScale[2]};
    grid-area: input;
    justify-self: end;
    z-index: 1;
  }

  > input,
  textarea {
    width: 100%;
    padding: 0 ${({ theme }) => theme.space[6]};
    background-color: ${({ theme }) => theme.grayScale[1]};
    margin: 0;
    justify-content: center;
    align-content: center;
    border: ${({ theme }) => theme.borders[0]};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme, size }) =>
      size === Size.SMALL ? theme.fontSizes[1] : theme.fontSizes[3]};
    line-height: ${({ theme, size }) =>
      size === Size.SMALL ? theme.lineHeights[1] : theme.lineHeights[3]};
    box-sizing: border-box;
    color: ${({ theme }) => theme.grayScale[4]};

    ::placeholder {
      color: ${({ theme }) => theme.grayScale[3]};
    }

    :disabled {
      color: ${({ theme }) => theme.colors[Variant.DISABLED]};
      ::placeholder {
        color: ${({ theme }) => theme.grayScale[2]};
      }
    }

    :selection {
      background: ${({ theme }) => theme.colors[Variant.POSITIVE]};
      color: white;
    }

    &:focus {
      outline: none;
    }
  }

  > textarea {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
    height: 6rem;
    resize: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.space[6]};
  }
`;

export default InputWrapper;
