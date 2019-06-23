import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { isEmpty, identity } from "ramda";
import { Tag } from "atoms";
import TagGroupWrapper from "./TagGroupWrapper";

type TagGroupProps = {
  className?: string;
  tags?: string[];
  children?: any;
  onClick?: (opts: { tag: string }) => void;
};

const TagGroup: FunctionComponent<TagGroupProps> = ({
  className,
  tags = [],
  onClick = identity,
  children
}) => {
  const augmentedTags = tags.map(
    (text, index) => (
      <Tag onClick={onClick} key={index}>
        {text}
      </Tag>
    ),
    tags
  );
  return (
    <TagGroupWrapper className={className}>
      {isEmpty(tags) ? children : augmentedTags}
    </TagGroupWrapper>
  );
};

export default styled(TagGroup)``;
