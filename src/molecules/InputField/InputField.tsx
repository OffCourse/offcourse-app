import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import { filter, isEmpty, identity } from "ramda";
import { Label, Input, Message } from "atoms";
import { Variant, Size } from "enums";
import MessageGroup from "../MessageGroup";
import InputFieldWrapper from "./InputFieldWrapper";

type InputFieldProps = {
  autoComplete?: boolean;
  autoFocus?: boolean;
  name: string;
  placeholder: string;
  title?: string;
  variant?: Variant.DEFAULT | Variant.DISABLED;
  value?: string;
  FieldComponent?: any;
  errors?: string[];
  size?: Size.SMALL | Size.NORMAL;
  isTextArea?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const compact = filter(identity as any);

const InputField: FunctionComponent<InputFieldProps> = ({
  FieldComponent = Input,
  name,
  value,
  children,
  placeholder,
  title,
  variant = Variant.DEFAULT,
  size = Size.NORMAL,
  autoFocus = false,
  autoComplete = false,
  isTextArea = false,
  errors = [],
  onChange,
  onBlur
}) => {
  const hasErrors = errors && !isEmpty(compact(errors));
  const labelSection = title && (
    <Label variant={variant} htmlFor={name}>
      {title}
    </Label>
  );

  const inputSection = (
    <FieldComponent
      size={size}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      autoComplete={`${autoComplete}`}
      autoFocus={autoFocus}
      hasErrors={hasErrors}
      isTextArea={isTextArea}
    >
      {children}
    </FieldComponent>
  );

  const errorsSection = (
    <MessageGroup isBasic={true}>
      {errors.map((error, index) => (
        <Message key={index} variant={Variant.NEGATIVE}>
          {error}
        </Message>
      ))}
    </MessageGroup>
  );

  return (
    <InputFieldWrapper>
      {labelSection}
      {errorsSection}
      {inputSection}
    </InputFieldWrapper>
  );
};

//   renderChildren() {
//     const {
//       onChange,
//       onBlur,
//       unformatted,
//     } = this.props;
//
//     return (
//       children || (
//         <FieldComponent
//           onChange={onChange}
//           onBlur={onBlur}
//           unformatted={unformatted}
//         />
//       )
//     );
//   }

//   render() {
//     return (
//       <InputFieldWrapper>
//         {this.renderErrors()}
//         {this.renderChildren()}
//       </InputFieldWrapper>
//     );
//   }
// }

// InputField.propTypes = {
//   unformatted: PropTypes.bool,
//   onBlur: PropTypes.func,
//   onChange: PropTypes.func,
//   variant: PropTypes.oneOf(["default", "textarea", "small"]),
// };

export default InputField;
