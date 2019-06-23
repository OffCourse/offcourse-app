import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { formatTitle } from "../helpers";
import LabelWrapper from "./LabelWrapper";
import { Variant } from "enums";

type LabelProps = {
  children: string;
  className?: string;
  variant?: Variant.DEFAULT | Variant.DISABLED;
  htmlFor?: string;
};

const Label: FunctionComponent<LabelProps> = ({
  children,
  className,
  variant = Variant.DEFAULT,
  htmlFor
}) => {
  const label = formatTitle(children);
  return (
    <LabelWrapper htmlFor={htmlFor} variant={variant} className={className}>
      {label}
    </LabelWrapper>
  );
};

export default styled(Label)``;
