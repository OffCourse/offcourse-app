import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import AvatarWrapper from "./AvatarWrapper";
import { Variant, Size, ErrorState } from "enums";
import { identity } from "ramda";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = Size;

const multiplier = {
  [SMALL]: 3,
  [NORMAL]: 6,
  [LARGE]: 10,
  [EXTRA_LARGE]: 15
};

type AvatarProps = {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  size?: Size;
  error?: ErrorState;
};

const Avatar: FunctionComponent<AvatarProps> = ({
  size = Size.SMALL,
  error,
  onClick = identity
}) => {
  return (
    <AvatarWrapper
      variant={error || Variant.DEFAULT}
      onClick={onClick}
      multiply={multiplier[size]}
    />
  );
};

export default Avatar;
