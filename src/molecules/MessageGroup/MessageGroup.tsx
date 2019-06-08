import React, { Children, cloneElement, FunctionComponent } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "ramda";
import styled from "styled-components";
import { Message } from "atoms";
import MessageGroupWrapper from "./MessageGroupWrapper";
import { Variant } from "enums";

type Message = {
  message: string;
  variant?: Variant;
};

type MessageGroupProps = {
  messages?: Message[];
  isBasic?: boolean;
  className?: string;
};

const MessageGroup: FunctionComponent<MessageGroupProps> = ({
  className,
  messages = [],
  isBasic = false,
  children
}) => {
  if (isEmpty(messages)) {
    return (
      <MessageGroupWrapper className={className}>
        {Children.map(
          children,
          child => child && cloneElement(child, { ...child.props, isBasic })
        )}
      </MessageGroupWrapper>
    );
  }
  return (
    <MessageGroupWrapper className={className}>
      {messages.map(({ message, variant = Variant.DEFAULT }, index) => (
        <Message isBasic={isBasic} variant={variant} key={index}>
          {message}
        </Message>
      ))}
    </MessageGroupWrapper>
  );
};

export default styled(MessageGroup)``;
