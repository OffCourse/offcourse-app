import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import Card from "./ExpandableCard";
import { Card as BasicCard, Icon, Heading, Section, Text } from "atoms";
import { Direction, Affordance, Size, ErrorState } from "enums";

const Debug = () => {
  const [{ level, visibleSections }, setState] = useState({
    level: 0,
    visibleSections: []
  });

  const setDebugState: (opts: any) => void = ({ level, visibleSections }) =>
    setState({ level, visibleSections });

  return (
    <div style={{ display: "flex" }}>
      <Card
        onCardResize={setDebugState}
        layout={[["heading"], ["heading", "body"]]}
      >
        <Section section="heading">
          <Heading>Hello World</Heading>
        </Section>
        <Section section="body">
          <Heading>How Are You?</Heading>
        </Section>
      </Card>

      <BasicCard>
        <Section direction={Direction.VERTICAL}>
          <Text>{`Current Level: ${level}`}</Text>
          <Text>{`Visible Sections: ${visibleSections.join(" ")}`}</Text>
        </Section>
      </BasicCard>
    </div>
  );
};

storiesOf("Molecules|ExpandableCard", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    return <Debug />;
  });
//   .add("can be turned off", () => {
//     return (
//       <Card
//         affordance={Affordance.NONE}
//         layout={[["heading"], ["heading", "body"]]}
//       >
//         <ResizeButton section="heading" />
//         <Section section="body">
//           <Heading>How Are You?</Heading>
//         </Section>
//       </Card>
//     );
//   });
