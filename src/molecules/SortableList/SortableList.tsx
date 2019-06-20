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
import List from "../List";
import LinkGroup from "../LinkGroup";

type SortableListProps = {
  children: any[];
  operations: { move: any; add: any; remove: any };
  hasControls?: boolean;
};

const SortableList: FunctionComponent<SortableListProps> = ({
  children,
  operations,
  hasControls = false
}) => {
  const dragItems = Children.map(children, (child, index) => (
    <Dragger
      remove={operations && operations.remove}
      hasControls={hasControls}
      index={index}
    >
      {child}
    </Dragger>
  ));

  return (
    <SortableListWrapper>
      <DragDropContext onDragEnd={operations && operations.move}>
        <Droppable droppableId="droppable">
          {({ innerRef, droppableProps, placeholder }, snapshot) => (
            <List ref={innerRef} {...droppableProps}>
              {dragItems}
              {placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      {hasControls && (
        <LinkGroup
          links={[
            {
              onClick: operations && operations.add,
              title: "Add"
            }
          ]}
        />
      )}
    </SortableListWrapper>
  );
};

export default SortableList;
