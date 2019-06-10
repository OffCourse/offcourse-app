import React, { Children, useState } from "react";
import List from "../List";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { identity, sortBy } from "ramda";
import styled from "styled-components";
import useSortChildren from "./useSortChildren";

const DragItem = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const SortableList = ({ children }) => {
  const [sortedChildren, sortChildren] = useSortChildren(children);

  const items = Children.map(sortedChildren, (child, index) => {
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

  return (
    <DragDropContext onDragEnd={sortChildren}>
      <Droppable droppableId="droppable">
        {({ innerRef, droppableProps, placeholder }, snapshot) => {
          return (
            <List ref={innerRef} {...droppableProps}>
              {items}
              {placeholder}
            </List>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default SortableList;
