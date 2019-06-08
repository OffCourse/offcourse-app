import { MouseEvent } from "react";
import { Size, Variant } from "enums";

type LinkShared = {
  onClick?: (event: any) => void;
  href?: string;
  variant?: Variant;
  size?: Size;
  tabIndex?: number;
  isBasic?: boolean;
  isActive?: boolean;
  title?: string
};


export default Link;
