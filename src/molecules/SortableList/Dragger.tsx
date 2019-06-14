import React, { FunctionComponent, Children, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { identity } from "ramda";
import SortableListWrapper from "./SortableListWrapper";
import DragItem from "./DragItem";

type DraggerProps = {
  index: number;
  children: any;
};

const Dragger: FunctionComponent<DraggerProps> = ({ index, children }) => {
  return (
    <Draggable draggableId={children.key} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <DragItem ref={innerRef} {...draggableProps} {...dragHandleProps}>
          {children}
        </DragItem>
      )}
    </Draggable>
  );
};

export default Dragger;
