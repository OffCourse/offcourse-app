import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";

const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const useArrangable = (initialItems: any[]) => {
  const [items, setItems] = useState(initialItems);

  function sort({ destination, source }: DropResult) {
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newOrder = reorder(items, source.index, destination.index);
    setItems(newOrder);
  }

  return [items, sort] as [any[], (result: DropResult) => void];
};

export default useArrangable;
