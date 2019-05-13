import React, { FunctionComponent } from "react";
import { formatTitle } from "../helpers";
import LabelWrapper from "./LabelWrapper";

type LabelProps = {
  children: string;
};

const Label: FunctionComponent<LabelProps> = ({ children }) => {
  const label = formatTitle(children);
  return <LabelWrapper>{label}</LabelWrapper>;
};

export default Label;
