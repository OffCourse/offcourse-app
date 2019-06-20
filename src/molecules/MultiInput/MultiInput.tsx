import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Input } from "atoms";
import MultiInputWrapper from "./MultiInputWrapper";
import { Size } from "enums";
import { isNil } from "ramda";
import { Input as InputType } from "types";

type MultiInputProps = InputType & { value: any };

const MultiInput: FunctionComponent<MultiInputProps> = ({
  name,
  hasErrors,
  onChange,
  onBlur,
  value,
  fields,
  placeholder
}) => {
  return (
    <MultiInputWrapper>
      {fields.map(field => {
        if (isNil(value[field])) {
          return null;
        }
        return (
          <Input
            onChange={onChange}
            key={`${name}.${field}`}
            onBlur={onBlur}
            size={Size.SMALL}
            name={`${name}.${field}`}
            value={value[field]}
            placeholder={placeholder || `Enter ${field}`}
          />
        );
      })}
    </MultiInputWrapper>
  );
};

export default MultiInput;
