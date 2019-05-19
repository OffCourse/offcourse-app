import React, { memo } from "react";
import PropTypes from "prop-types";
import TextWrapper from "./TextWrapper";
import { Size } from "enums";

const { SMALL, NORMAL, LARGE } = Size;

const Text = ({ size, children, mb }) => {
  const textProps = {
    SMALL: { textSize: 0, lineHeight: 0 },
    NORMAL: { textSize: 1, lineHeight: 2 },
    LARGE: { textSize: 2, lineHeight: 3 }
  };
  const { textSize, lineHeight } = textProps[size];
  return (
    <TextWrapper mb={mb} fontSize={textSize} lineHeight={lineHeight}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
  children: PropTypes.node.isRequired,
  mb: PropTypes.number
};

Text.defaultProps = {
  size: NORMAL
};

export default memo(Text);
