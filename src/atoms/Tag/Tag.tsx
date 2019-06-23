import React, { FunctionComponent, MouseEvent, useCallback } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Text } from "..";
import { Size } from "enums";
import TagWrapper from "./TagWrapper";
import { Tag as TagType } from "types";

import styled from "styled-components";

type TagProps = TagType;

const Tag: FunctionComponent<TagProps> = ({
  onClick,
  className,
  children,
  href
}) => {
  const handleClick = useCallback(event => {
    if (onClick) {
      event.preventDefault();
      onClick({ tag: children });
    }
  }, []);
  const title = formatTitle(children);
  return (
    <TagWrapper className={className} onClick={handleClick} href={href}>
      <Text size={Size.SMALL}>{title}</Text>
    </TagWrapper>
  );
};

export default styled(Tag)``;
