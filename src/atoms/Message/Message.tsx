import React, { FunctionComponent } from "react";
import { formatTitle } from "../helpers";
import { Variant } from "enums";
import styled from "styled-components";
import MessageWrapper from "./MessageWrapper";

type MessageProps = {
  variant?: Variant;
  children: string;
  isBasic?: boolean;
  className?: string;
};

const Message: FunctionComponent<MessageProps> = ({
  isBasic = false,
  variant = Variant.DEFAULT,
  children,
  className
}) => {
  return (
    <MessageWrapper variant={variant} isBasic={isBasic} className={className}>
      {formatTitle(children)}
    </MessageWrapper>
  );
};

export default styled(Message)``;
