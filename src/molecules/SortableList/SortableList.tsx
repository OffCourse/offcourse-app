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
  order: string[];
  reorder: (result: DropResult) => void;
};

const SortableList: FunctionComponent<SortableListProps> = ({
  children,
  order,
  reorder = identity
}) => {
  const sortedChildren = order
    ? order.map(id => children.find(({ key }) => id === key))
    : children;

  const dragItems = Children.map(sortedChildren, (child, index) => (
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
