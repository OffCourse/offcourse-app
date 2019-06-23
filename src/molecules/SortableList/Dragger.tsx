import React, { FunctionComponent } from "react";
import SortHandles from "./SortHandles";
import { Draggable } from "react-beautiful-dnd";
import DragItemWrapper from "./DragItemWrapper";

type DraggerProps = {
  index: number;
  children: any;
  remove: any;
  hasControls?: boolean;
};

const Dragger: FunctionComponent<DraggerProps> = ({
  index,
  hasControls = false,
  remove,
  children
}) => {
  return (
    <Draggable draggableId={children.key} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => {
        return hasControls ? (
          <DragItemWrapper ref={innerRef} {...draggableProps}>
            {children}
            <SortHandles {...dragHandleProps} remove={() => remove(index)} />
          </DragItemWrapper>
        ) : (
          <DragItemWrapper
            ref={innerRef}
            {...dragHandleProps}
            {...draggableProps}
          >
            {children}
          </DragItemWrapper>
        );
      }}
    </Draggable>
  );
};

export default Dragger;
