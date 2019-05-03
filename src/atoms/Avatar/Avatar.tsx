import React, { memo, FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import AvatarWrapper from "./AvatarWrapper";
import { Size, ErrorStates } from "../enums";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = Size;

const { DEFAULT } = ErrorStates;

const multiplier = {
  [SMALL]: 3,
  [NORMAL]: 6,
  [LARGE]: 10,
  [EXTRA_LARGE]: 15
};

type AvatarProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  variant?: ErrorStates;
};

const Avatar: FunctionComponent<AvatarProps> = ({
  size = SMALL,
  onClick,
  variant = DEFAULT
}) => {
  return (
    <AvatarWrapper
      variant={variant}
      onClick={onClick}
      multiply={multiplier[size]}
    />
  );
};

export default memo(Avatar);
