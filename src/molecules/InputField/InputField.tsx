import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import { filter, isEmpty, identity } from "ramda";
import { Label, Input, Message } from "atoms";
import { Variant, Size } from "enums";
import MessageGroup from "../MessageGroup";
import InputFieldWrapper from "./InputFieldWrapper";
import { Input as InputType } from "types";

type InputFieldProps = InputType & {
  title?: string;
  FieldComponent?: any;
  errors?: string[];
};

const compact = filter(identity as any);

const InputField: FunctionComponent<InputFieldProps> = ({
  FieldComponent = Input,
  name,
  value,
  children,
  placeholder,
  title,
  variant = Variant.DEFAULT,
  size = Size.NORMAL,
  autoFocus = false,
  autoComplete = false,
  isNormalized = true,
  isTextArea = false,
  errors = [],
  onChange,
  onBlur
}) => {
  const hasErrors = errors && !isEmpty(compact(errors));
  const labelSection = title && (
    <Label variant={variant} htmlFor={name}>
      {title}
    </Label>
  );

  const inputSection = (
    <FieldComponent
      size={size}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      autoComplete={`${autoComplete}`}
      autoFocus={autoFocus}
      hasErrors={hasErrors}
      isTextArea={isTextArea}
      isNormalized={isNormalized}
    >
      {children}
    </FieldComponent>
  );

  const errorsSection = (
    <MessageGroup isBasic={true}>
      {errors.map((error, index) => (
        <Message key={index} variant={Variant.NEGATIVE}>
          {error}
        </Message>
      ))}
    </MessageGroup>
  );

  return (
    <InputFieldWrapper>
      {labelSection}
      {errorsSection}
      {inputSection}
    </InputFieldWrapper>
  );
};

export default InputField;
