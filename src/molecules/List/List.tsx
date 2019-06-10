import React, { FunctionComponent } from "react";
import { ListItem } from "atoms";
import ListWrapper from "./ListWrapper";

const List: FunctionComponent<> = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};

export default List;
