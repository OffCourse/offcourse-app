import { MouseEvent } from "react";

type Link = {
  onClick?: (event: any) => void;
  href?: string;
  children: string;
};

export default Link;
