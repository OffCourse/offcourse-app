import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { isEmpty } from "ramda";
import { Direction } from "enums";
import { Link } from "atoms";
import LinkGroupWrapper from "./LinkGroupWrapper";
import { Link as LinkType } from "types";

type LinkGroupProps = {
  className?: string;
  links: LinkType[];
  direction?: Direction.HORIZONTAL | Direction.VERTICAL;
};

const LinkGroup: FunctionComponent<LinkGroupProps> = ({
  className,
  children,
  direction = Direction.HORIZONTAL,
  links = []
}) => {
  const isHorizontal = direction === Direction.HORIZONTAL;
  const LinkElems = links.map(
    ({ title, disabled, active, href, onClick }, index) => (
      <Link
        active={active}
        disabled={disabled}
        key={index}
        href={href}
        onClick={onClick}
      >
        {title}
      </Link>
    )
  );

  return (
    <LinkGroupWrapper className={className} isHorizontal={isHorizontal}>
      {isEmpty(links) ? children : LinkElems}
    </LinkGroupWrapper>
  );
};

export default styled(LinkGroup)``;
