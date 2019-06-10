import { Children, useState } from "react";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const useSortChildren = children => {
  const initialOrder = Children.map(children, ({ key }) => {
    return key;
  });

  const [order, setOrder] = useState(initialOrder);

  function sort({ destination, source }) {
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newOrder = reorder(order, source.index, destination.index);
    setOrder(newOrder);
  }

  const sortedChildren = order.map(id =>
    children.find(({ key }) => id === key)
  );

  return [sortedChildren, sort];
};

export default useSortChildren;
