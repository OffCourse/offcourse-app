import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { Portal, Backdrop, Button } from "atoms";
import { useToggle } from "hooks";
import { Direction, Variant, Size, ErrorState } from "enums";

const PortalOpener = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  return (
    <div>
      <Portal rootEl="root">{isOpen ? <Backdrop /> : null}</Portal>
      <Button onClick={setIsOpen}>Open Portal</Button>
    </div>
  );
};

storiesOf("Atoms|Portal", module)
  .addDecorator(withKnobs)
  .add("show portal", () => {
    return <PortalOpener />;
  });
