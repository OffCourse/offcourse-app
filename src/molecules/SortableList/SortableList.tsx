import React, { Children, FunctionComponent } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from "react-beautiful-dnd";
import { identity } from "ramda";
import SortableListWrapper from "./SortableListWrapper";
import Dragger from "./Dragger";

type SortableListProps = {
  children: any[];
  reorder: (result: DropResult) => void;
};

const SortableList: FunctionComponent<SortableListProps> = ({
  children,
  reorder = identity
}) => {
  const dragItems = Children.map(children, (child, index) => (
    <Dragger index={index}>{child}</Dragger>
  ));

  return (
    <DragDropContext onDragEnd={reorder}>
      <Droppable droppableId="droppable">
        {({ innerRef, droppableProps, placeholder }, snapshot) => {
          return (
            <SortableListWrapper ref={innerRef} {...droppableProps}>
              {dragItems}
              {placeholder}
            </SortableListWrapper>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default SortableList;
