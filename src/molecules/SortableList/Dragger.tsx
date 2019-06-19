import React, { FunctionComponent } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DragItem } from "atoms";

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
