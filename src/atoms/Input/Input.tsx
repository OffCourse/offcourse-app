import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { formatTitle, lowerCase } from "../helpers";
import { Size, Variant } from "enums";
import { Input as InputType } from "types";
import InputWrapper from "./InputWrapper";

type InputProps = InputType & { className?: string };

const Input: FunctionComponent<InputProps> = ({
  className,
  autoComplete = false,
  autoFocus = false,
  isTextArea = false,
  size = Size.NORMAL,
  variant = Variant.DEFAULT,
  hasErrors = false,
  isNormalized = true,
  placeholder = "Enter Something",
  inputType = "text",
  name,
  children,
  value,
  onChange,
  onBlur
}) => {
  const isDisabled = variant === Variant.DISABLED;
  const formatValue = () => {
    if (!value) {
      return value;
    }
    return isNormalized ? formatTitle(value) : value;
  };

  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = e => {
    if (!onChange) {
      return;
    }
    if (!isNormalized) {
      return onChange(e);
    }

    const value = lowerCase(e.target.value);
    e.target.value = value;
    return onChange(e);
  };

  return (
    <InputWrapper
      className={className}
      size={isTextArea ? Size.SMALL : size}
      isDisabled={isDisabled}
      hasErrors={hasErrors}
    >
      {isTextArea ? (
        <textarea
          autoComplete={`${autoComplete}`}
          autoFocus={autoFocus}
          rows={4}
          name={name}
          disabled={isDisabled}
          value={value}
          placeholder={formatTitle(placeholder)}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          name={name}
          type={inputType}
          autoComplete={`${autoComplete}`}
          autoFocus={autoFocus}
          disabled={isDisabled}
          value={formatValue()}
          placeholder={formatTitle(placeholder)}
          onChange={handleChange}
          onBlur={onBlur}
        />
      )}

      {children && <div>{children}</div>}
    </InputWrapper>
  );
};

export default styled(Input)``;
