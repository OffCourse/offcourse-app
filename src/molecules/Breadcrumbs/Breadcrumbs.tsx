import React, { FunctionComponent } from "react";
import { map, isEmpty } from "ramda";
import { Link } from "atoms";
import BreadcrumbsWrapper from "./BreadcrumbsWrapper";

type BreadCrumb = {
  text: string;
  onClick: any;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadCrumb[];
};

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ breadcrumbs }) => {
  if (isEmpty(breadcrumbs)) {
    return null;
  }
  return (
    <BreadcrumbsWrapper>
      {map(({ onClick, text }) => {
        return <Link key={text} onClick={onClick} isBasic>{`< ${text}`}</Link>;
      }, breadcrumbs)}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
