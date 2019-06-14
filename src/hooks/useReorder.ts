import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";

const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const useReorder = (initialOrder: string[]) => {
  const [order, setOrder] = useState(initialOrder);

  function sort({ destination, source }: DropResult) {
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newOrder = reorder(order, source.index, destination.index);
    setOrder(newOrder);
  }

  return [order, sort] as [string[], (result: DropResult) => void];
};

export default useReorder;
