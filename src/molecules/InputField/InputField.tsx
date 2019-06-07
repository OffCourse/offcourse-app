import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { isEmpty, identity } from "ramda";
import { compact } from "../helpers";
import { Label, Input } from "atoms";
// import { MessageGroup } from "..";
import InputFieldWrapper from "./InputFieldWrapper";
import { Variant, Size } from "enums";

const formatMessages = (errors = [], { variant = NEGATIVE, px } = {}) => {
  return map(message => {
    return { message, variant, px };
  }, errors);
};

const MessageGroup = identity;

type InputFieldProps = {
  autoComplete?: boolean;
  autoFocus?: boolean;
  name: string;
  placeholder: string;
  title: string;
  variant: Variant.DEFAULT | Variant.DISABLED;
  value: string;
  FieldComponent: any;
  errors: string[];
};

const InputField: FunctionComponent<InputFieldProps> = ({
  FieldComponent = Input,
  name,
  value,
  children,
  placeholder,
  title,
  variant,
  autoFocus = false,
  autoComplete = false,
  errors = []
}) => {
  const hasErrors = errors && !isEmpty(compact(errors));
  const labelSection = title && (
    <Label variant={variant} htmlFor={name}>
      {title}
    </Label>
  );

  const inputSection = children || (
    <FieldComponent
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      autoComplete={`${autoComplete}`}
      autoFocus={autoFocus}
      hasErrors={hasErrors}
    />
  );

  return (
    <InputFieldWrapper>
      {labelSection}
      {/* {this.renderErrors()} */}
      {inputSection}
    </InputFieldWrapper>
  );
};

//   renderErrors() {
//     return hasErrors ? (
//       <MessageGroup
//         px={6}
//         pb={6}
//         basic
//         messages={MessageGroup.formatMessages(errors)}
//       />
//     ) : null;
//   }

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
//   autoComplete: PropTypes.bool,
//   autoFocus: PropTypes.bool,
//   onBlur: PropTypes.func,
//   onChange: PropTypes.func,
//   errors: PropTypes.array,
//   variant: PropTypes.oneOf(["default", "textarea", "small"]),
// };

export default InputField;
