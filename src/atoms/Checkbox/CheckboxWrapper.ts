import styled from "styled-components";
import { Size } from "enums";

const boxProps = {
  [Size.NORMAL]: { boxSize: "1.25rem", labelSize: "1rem" },
  [Size.LARGE]: { boxSize: "1.66666667rem", labelSize: "1.333333rem" }
};

const CheckboxWrapper = styled.div<{size: Size.NORMAL | Size.LARGE}>`
  width: ${({size}) => boxProps[size]["boxSize"]};
  height: ${({size}) => boxProps[size]["boxSize"]};
  display: grid;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${({theme}) => theme.colors.grayScale[0]};

  grid-template-areas: "checkbox";

  > input[type="checkbox"] {
    display: none;
  }

  > label {
    display: none;
    background-color: ${({theme}) => theme.colors.grayScale[0]};
    color: ${({theme}) => theme.colors.grayScale[4]};
    width: ${({size}) => boxProps[size]["labelSize"]};
    height: ${({size}) => boxProps[size]["labelSize"]};
    grid-area: checkbox;
    box-sizing: border-box;
  }

  > input[type="checkbox"]:checked + label {
    display: block;
  }
`;

export default CheckboxWrapper;
