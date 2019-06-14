import React, { FunctionComponent, useEffect } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { ListItem, Input } from "atoms";
import SortableList from "../SortableList";
import Handles from "./Handles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useReorder } from "hooks";

type InputListProps = {
  items: any[];
  FieldComponent: any;
  onReorder: any;
};

const InputList: FunctionComponent<InputListProps> = ({
  items,
  FieldComponent = Input,
  onReorder
}) => {
  const [order, reorder] = useReorder(items.map(({ id }) => id));

  useEffect(
    () => onReorder(order.map(id => items.find(item => id === item.id))),
    [order]
  );

  return (
    <SortableList order={order} reorder={reorder}>
      {items.map(({ id, title }) => (
        <FieldComponent onChange={identity} key={id} placeholder={title} />
      ))}
    </SortableList>
  );
};
// const SortableList = identity;
// const LinkGroup = identity;

// const InputList = ({
//   arrangeable,
//   move,
//   title,
//   add,
//   items,
//   errors,
//   touched,
//   placeholder,
//   remove,
//   name,
//   onChange,
//   onBlur,
//   FieldComponent
// }) => {
//   const links = [
//     {
//       onClick: add,
//       title: title.slice(0, -1)
//     }
//   ];
//   return (
//     <Fragment>
//       <SortableList onSort={move}>
//         {mapIndexed((item, index) => {
//           return (
//             <FieldComponent
//               value={item}
//               onChange={onChange}
//               onBlur={onBlur}
//               hasErrors={touched[index] && !!errors[index]}
//               mb={3}
//               placeholder={placeholder}
//               key={index}
//               name={`${name}.${index}`}
//             >
//               {arrangeable && <Handles remove={remove} index={index} />}
//             </FieldComponent>
//           );
//         }, items)}
//       </SortableList>
//       {arrangeable && (
//         <LinkGroup pt={6} links={links} justifyContent="flex-end" />
//       )}
//     </Fragment>
//   );
// };

// InputList.Input = Input;
// InputList.move = move;

// InputList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.object])
//   ).isRequired,
//   errors: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.object])
//   ),
//   touched: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
//   ),
//   arrangeable: PropTypes.bool,
//   title: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   add: PropTypes.func,
//   remove: PropTypes.func,
//   move: PropTypes.func,
//   onChange: PropTypes.func.isRequired,
//   onBlur: PropTypes.func,
//   FieldComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
// };

// InputList.defaultProps = {
//   arrangeable: false,
//   placeholder: "edit this",
//   errors: [],
//   touched: [],
//   items: [],
//   FieldComponent: Input
// };

export default InputList;
