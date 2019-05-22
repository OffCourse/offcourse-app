import React, { FunctionComponent, MouseEvent, useCallback } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Text } from "..";
import { Size } from "enums";
import TagWrapper from "./TagWrapper";

import styled from "styled-components";

type TagProps = {
  children: string;
  href: string;
  onClick?: (opts: { tag: string }) => void;
};

const Tag: FunctionComponent<TagProps> = ({ onClick, children, href }) => {
  const handleClick = useCallback(event => {
    if (onClick) {
      event.preventDefault();
      onClick({ tag: children });
    }
  }, []);
  const title = formatTitle(children);
  return (
    <TagWrapper onClick={handleClick} href={href}>
      <Text size={Size.SMALL}>{title}</Text>
    </TagWrapper>
  );
};

export default Tag;
