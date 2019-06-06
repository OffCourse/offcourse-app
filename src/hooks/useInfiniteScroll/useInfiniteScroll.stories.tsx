import React, { useCallback, useState, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useCount from "../useCount";
import useInfiniteScroll from "../useInfiniteScroll";
import useToggle from "../useToggle";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { CheckItem } from "molecules";
import { Direction, Affordance, Size, Variant } from "enums";

const text = `
Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createFragment = () => {
  return text.slice(randInt(0, 200), randInt(300, 600)).trim();
};

const fragments = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(createFragment);
storiesOf("Hooks|useInfiniteScroll", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const [collection, setCollection] = useState(fragments);
      const [isFetching, setIsFetching] = useInfiniteScroll(
        createMoreFragments
      );

      function createMoreFragments() {
        console.log(collection.length);
        setCollection([...collection, ...fragments]);
        return setIsFetching(false);
      }

      return (
        <div>
          {collection.map((fragment, key) => (
            <Card key={key}>
              <Section direction={Direction.VERTICAL}>
                <Text>{fragment}</Text>
              </Section>
            </Card>
          ))}
          {isFetching && "Loading..."}
        </div>
      );
    };
    return <Component />;
  });
