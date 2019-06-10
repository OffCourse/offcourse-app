import React, { Children, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useSortChildren from "./useSortChildren";
import SortableListWrapper from "./SortableListWrapper";
import DragItem from "./DragItem";

const createDragItems = children =>
  Children.map(children, (child, index) => {
    return (
      <Draggable draggableId={child.key} index={index}>
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <DragItem ref={innerRef} {...draggableProps} {...dragHandleProps}>
            {child}
          </DragItem>
        )}
      </Draggable>
    );
  });

const SortableList = ({ children }) => {
  const [sortedChildren, sortChildren] = useSortChildren(children);
  return (
    <DragDropContext onDragEnd={sortChildren}>
      <Droppable droppableId="droppable">
        {({ innerRef, droppableProps, placeholder }, snapshot) => {
          return (
            <SortableListWrapper ref={innerRef} {...droppableProps}>
              {createDragItems(sortedChildren)}
              {placeholder}
            </SortableListWrapper>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default SortableList;
