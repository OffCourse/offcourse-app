import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState
} from "react";
import { Input, Icon } from "atoms";
import { Size, Variant } from "enums";

const { LARGE } = Size;

type InputProps = {
  name: string;
  value?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  hasErrors?: boolean;
  size?: Size.SMALL | Size.NORMAL;
  variant?: Variant.DEFAULT | Variant.DISABLED;
};

const PasswordInput: FunctionComponent<InputProps> = ({
  name = "password",
  value,
  onChange,
  onBlur,
  placeholder,
  hasErrors = false,
  size = Size.NORMAL,
  variant = Variant.DEFAULT
}) => {
  const isDisabled = variant === Variant.DISABLED;
  const [inputType, setInputType] = useState("password");
  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  return (
    <Input
      unformatted
      name={name}
      value={value}
      onChange={onChange}
      inputType={inputType}
      variant={variant}
      placeholder={placeholder}
    >
      {!isDisabled && (
        <Icon size={Size.LARGE} onClick={toggleInputType} name="eye" />
      )}
    </Input>
  );
};

export default PasswordInput;
