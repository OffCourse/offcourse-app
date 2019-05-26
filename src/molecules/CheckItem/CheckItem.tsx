import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import { Checkbox, Link } from "atoms";
import { ListItem as ListItemType } from "types";
import CheckItemWrapper from "./CheckItemWrapper";

type Id = string | number;

type CheckItemProps = ListItemType & {
  className?: string;
  children: string;
  isChecked?: boolean;
  id?: Id;
  onToggle?: (opts: { id?: Id; checked: boolean }) => void;
};

const CheckItem: FunctionComponent<CheckItemProps> = ({
  href,
  className,
  onClick,
  children,
  isChecked = true,
  id,
  onToggle = identity
}) => (
  <CheckItemWrapper className={className}>
    <Checkbox
      onToggle={({ checked }) => onToggle({ id, checked })}
      isChecked={isChecked}
    />
    {href || onClick ? (
      <Link isBasic href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      children
    )}
  </CheckItemWrapper>
);

export default styled(CheckItem)``;
