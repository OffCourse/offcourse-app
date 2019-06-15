import React, { ChangeEvent, FormEvent } from "react";
import { Size, Variant } from "enums";

type Input = {
  autoComplete?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  hasErrors?: boolean;
  size?: Size.SMALL | Size.NORMAL;
  isTextArea?: boolean;
  isNormalized?: boolean;
  inputType?: "text" | "password";
  variant?: Variant.DEFAULT | Variant.DISABLED;
};

export default Input;
