import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "ramda";
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
};

const MessageGroup: FunctionComponent<MessageGroupProps> = ({
  messages = [],
  isBasic = false,
  children
}) => {
  if (isEmpty(messages)) {
    return <MessageGroupWrapper>{children}</MessageGroupWrapper>;
  }

  return (
    <MessageGroupWrapper>
      {messages.map(({ message, variant = Variant.DEFAULT }, index) => (
        <Message isBasic={isBasic} variant={variant} key={index}>
          {message}
        </Message>
      ))}
    </MessageGroupWrapper>
  );
};

export default MessageGroup;
