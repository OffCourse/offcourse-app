import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { formatTitle, lowerCase } from "../helpers";
import { Size, Variant } from "enums";
import InputWrapper from "./InputWrapper";

type InputProps = {
  autoComplete?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  hasErrors?: boolean;
  size?: Size.SMALL | Size.NORMAL;
  isTextArea?: boolean;
  unformatted?: boolean;
  inputType?: string;
  variant: Variant.DEFAULT | Variant.DISABLED;
};

const Input: FunctionComponent<InputProps> = ({
  autoComplete = false,
  autoFocus = false,
  isTextArea = false,
  size = Size.NORMAL,
  variant = Variant.DEFAULT,
  hasErrors = false,
  unformatted = false,
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
    return unformatted ? value : formatTitle(value);
  };

  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = e => {
    if (!onChange) {
      return;
    }
    const value = lowerCase(e.target.value);
    e.target.value = value;
    onChange(e);
  };

  return (
    <InputWrapper
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
          placeholder={placeholder}
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
          onChange={onChange && !unformatted ? handleChange : onChange}
          onBlur={onBlur}
        />
      )}

      {children && <div>{children}</div>}
    </InputWrapper>
  );
};

export default styled(Input)``;
