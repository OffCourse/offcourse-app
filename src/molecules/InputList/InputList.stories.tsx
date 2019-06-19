import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import { useArrangable } from "hooks";
import InputList from "./InputList";
import { ListItem, Input } from "atoms";
import { Direction, Variant, Size, ErrorState } from "enums";

const Inputs = styled.div`
  display: flex;
`;

const MultiField = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.grayScale[1]};

  ${Inputs} {
    display: flex;
    flex-direction: column;
    flex: 50;
    > ${Input} {
      margin-bottom: ${({ theme }) => theme.space[0]};
    }
  }
  > div {
    flex: 1;
  }
`;

storiesOf("Molecules|InputList", module)
  .addDecorator(withKnobs)
  .add("simple input fields", () => {
    const FieldComponent = ListItem;
    const Component = () => {
      const items = ["hello", "word"];
      const [arrangedItems, operations] = useArrangable(items);
      return <InputList operations={operations} items={arrangedItems} />;
    };
    return <Component />;
  })
  .add("complex input fields", () => {
    const FieldComponent = ListItem;
    const Component = () => {
      const items = [
        { author: "abc", title: "hello" },
        { author: "bcd", title: "word" }
      ];
      const [arrangedItems, operations] = useArrangable(items);
      const FieldComponent = ({
        name,
        children,
        hasErrors,
        onChange,
        onBlur,
        value,
        ...rest
      }) => {
        return (
          <MultiField>
            <Inputs>
              <Input
                onChange={onChange}
                onBlur={onBlur}
                size={Size.SMALL}
                name={`${name}.title`}
                value={value.title}
              />
              <Input
                onChange={onChange}
                onBlur={onBlur}
                size={Size.SMALL}
                name={`${name}.author`}
                value={value.author}
              />
            </Inputs>
            {children}
          </MultiField>
        );
      };
      return (
        <InputList
          name="test"
          FieldComponent={FieldComponent}
          operations={operations}
          items={arrangedItems}
        />
      );
    };
    return <Component />;
  });
