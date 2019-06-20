import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Input } from "atoms";
import MultiInputWrapper from "./MultiInputWrapper";
import { Size } from "enums";
import { Input as InputType } from "types";

type MultiInputProps = InputType & { value: any };

const MultiInput: FunctionComponent<MultiInputProps> = ({
  name,
  children,
  hasErrors,
  onChange,
  onBlur,
  value,
  fields
}) => {
  return (
    <MultiInputWrapper>
        {fields.map(field => {
          if (!value[field]) {
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
            />
          );
        })}
    </MultiInputWrapper>
  );
};

export default MultiInput;
