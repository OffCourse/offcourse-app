import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { formatTitle } from "../helpers";
import { ListItem as ListItemType } from "types";
import { Link } from "atoms";
import ListItemWrapper from "./ListItemWrapper";

type ListItemProps = ListItemType & {
  className?: string;
  children: any[];
};

const ListItem: FunctionComponent<ListItemProps> = ({
  children,
  className,
  onClick,
  href
}) => {
  const isLink = !!(href || onClick);
  if (typeof children === "string") {
    const content = isLink ? (
      <Link isBasic href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      formatTitle(children)
    );
    return (
      <ListItemWrapper className={className} isLink={isLink}>
        {content}
      </ListItemWrapper>
    );
  }
  return <ListItemWrapper className={className}>{children}</ListItemWrapper>;
};

export default styled(ListItem)``;
