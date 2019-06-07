import React, { FunctionComponent } from "react";
import { map, isEmpty } from "ramda";
import { Link } from "atoms";
import styled from "styled-components";
import { formatTitle } from "atoms/helpers";
import { Breadcrumb } from "types";

type BreadcrumbsProps = {
  trail?: Breadcrumb[];
};

const Breadcrumbs = styled.div.attrs(({ trail = [] }: BreadcrumbsProps) => {
  const children = map(({ onClick, text }) => {
    const crumb = formatTitle(text);
    return <Link key={text} onClick={onClick} isBasic>{`< ${crumb}`}</Link>;
  }, trail);
  return { children, display: isEmpty(trail) ? "none" : "flex" };
})<BreadcrumbsProps>`
  display: ${({ display }) => display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  ${Link} {
    margin-right: 0.5rem;
  }
`;

export default Breadcrumbs;
