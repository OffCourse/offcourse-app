import { MouseEvent } from "react";
import { Size, Variant } from "enums";

type Button = {
  onClick?: ((event: MouseEvent<HTMLButtonElement>) => void) | null;
  href?: string | null;
  variant?: Variant;
  size?: Size;
  isSubmit?: boolean;
  title?: string;
  tabIndex?: number;
};

export default Button;
