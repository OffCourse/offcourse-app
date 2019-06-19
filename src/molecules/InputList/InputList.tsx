import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ListItem, Input } from "atoms";
import SortableList from "../SortableList";
import LinkGroup from "../LinkGroup";
import Handles from "./Handles";
import InputListWrapper from "./InputListWrapper";

type InputListProps = {
  items: any[];
  operations: { move: any; add: any; remove: any };
  FieldComponent?: any;
  onArrange?: any;
  onChange: any;
  onBlur: any;
  touched: boolean[];
  errors: string[];
  placeholder: string;
  name?: string;
  title: string;
  isArrangable: boolean;
};

const InputList: FunctionComponent<InputListProps> = ({
  items,
  name,
  operations,
  onArrange,
  onChange,
  onBlur,
  touched = [],
  errors = [],
  FieldComponent = Input,
  placeholder = "Edit This",
  isArrangable = true
}) => {
  const { add, remove, move } = operations;
  const links = [
    {
      onClick: add,
      title: "Add"
    }
  ];
  return (
    <InputListWrapper>
      <SortableList reorder={move}>
        {items.map((item, index) => (
          <FieldComponent
            value={item}
            onChange={onChange}
            onBlur={onBlur}
            hasErrors={touched[index] && !!errors[index]}
            placeholder={placeholder}
            key={index}
            name={`${name}.${index}`}
          >
            {isArrangable && <Handles remove={remove} index={index} />}
          </FieldComponent>
        ))}
      </SortableList>
      {isArrangable && <LinkGroup links={links} />}
    </InputListWrapper>
  );
};
export default InputList;
