import { MouseEvent } from "react";
import { Size, Variant } from "enums";

type Link = {
  onClick?: (event: any) => void;
  href?: string;
  variant?: Variant;
  size?: Size;
  title?: string;
  tabIndex?: number;
};

export default Link;
