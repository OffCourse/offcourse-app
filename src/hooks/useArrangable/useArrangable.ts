import { useState, useEffect, useRef } from "react";
import { DropResult } from "react-beautiful-dnd";

const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const useArrangable = (initialItems: any[]) => {
  const [items, setItems] = useState(initialItems);
  const itemsRef = useRef(items);

  useEffect(() => {
    itemsRef.current = items;
  });

  const remove = (index: number) => {
    itemsRef.current.splice(index, 1);
    setItems([...itemsRef.current]);
  };

  const add = () => {
    setItems([...itemsRef.current, ""]);
  };

  const move = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newOrder = reorder(items, source.index, destination.index);
    setItems(newOrder);
  };

  return [items, { move, remove, add }] as [
    any[],
    {
      move: (result: DropResult) => void;
      remove: (index: number) => void;
      add: () => void;
    }
  ];
};

export default useArrangable;
