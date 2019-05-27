import React, {
  FunctionComponent,
  useState,
  Children,
  cloneElement
} from "react";
import { Card, Text, Section } from "atoms";
import { identity, isEmpty, contains, isNil, omit } from "ramda";
import PropTypes from "prop-types";
import { Variant, Affordance, Direction } from "enums";
import { Card as CardType } from "types";

type CardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  initialLevel?: number;
  layout?: string[][];
};

const ExpandableCard: FunctionComponent<CardProps> = ({
  affordance = Affordance.EXPANDABLE,
  children,
  layout = [],
  initialLevel
}) => {
  const [level, setLevel] = useState(
    isNil(initialLevel) ? layout.length - 1 : initialLevel
  );
  const isSelectable = affordance === Affordance.EXPANDABLE;
  return (
    <Card affordance={isSelectable ? Affordance.SELECTABLE : Affordance.NONE}>
      {children}
      <Section direction={Direction.VERTICAL}>
        <Text>Current Level: {level}</Text>
        <Text>Visible Sections: {layout[level].join(" ")}</Text>
      </Section>
    </Card>
  );
};

// class ExpandableCard extends Component {
//   state = {
//     level: isNil(this.props.initialLevel)
//       ? this.props.layout.length - 1
//       : this.props.initialLevel
//   };

//   handleResize = () => {
//     const { onResize } = this.props;
//     this.setState(
//       ({ level }, { layout }) => {
//         const nextLevel = (level + 1) % layout.length;
//         return { level: nextLevel || 0 };
//       },
//       () => onResize(this.state.level)
//     );
//   };

//   renderElem = (child, index) => {
//     const { layout, onIconClick, affordance, variant } = this.props;
//     const { level } = this.state;

//     if (index === 0 && affordance === Affordance.EXPANDABLE) {
//       return cloneElement(child, {
//         ...child.props,
//         variant,
//         onIconClick: this.handleResize,
//         affordance:
//           level === layout.length - 1
//             ? Affordance.SHRINKABLE
//             : Affordance.EXPANDABLE
//       });
//     }

//     if (index === 0) {
//       return cloneElement(child, {
//         ...child.props,
//         variant,
//         affordance
//       });
//     }
//     return child;
//   };

//   augmentSections = () => {
//     const { variant, children, layout } = this.props;

//     if (variant === Variant.DISABLED) {
//       return Children.map(children, (child, index) => {
//         if (!child || index !== 0) return null;
//         return this.renderElem(child, index);
//       });
//     }

//     return Children.map(children, (child, index) => {
//       if (!child) return null;
//       const { section } = child.props;
//       const { level } = this.state;
//       const isVisible = layout[level] && contains(section, layout[level]);
//       return (isEmpty(layout) || isVisible) && this.renderElem(child, index);
//     });
//   };

//   render() {
//     const { affordance } = this.props;
//     const rest = omit(
//       ["initialLevel", "layout", "children", "onResize", "onIconClick"],
//       this.props
//     );
//     return (
//       <Card
//         {...rest}
//         affordance={
//           affordance === Affordance.EXPANDABLE
//             ? Affordance.SELECTABLE
//             : affordance
//         }
//       >
//         {this.augmentSections()}
//       </Card>
//     );
//   }
// }

// ExpandableCard.Section = Section;

// ExpandableCard.propTypes = {
//   onResize: PropTypes.func,
//   initialLevel: PropTypes.number,
//   layout: PropTypes.array,
//   variant: PropTypes.oneOf([ACTIVE, INACTIVE]),
//   affordance: PropTypes.oneOf([
//     NONE,
//     CHECKABLE,
//     UNCHECKABLE,
//     CLOSEABLE,
//     SELECTABLE,
//     EXPANDABLE,
//     SHRINKABLE
//   ])
// };

ExpandableCard.defaultProps = {
  onResize: identity,
  layout: [],
  variant: Variant.DEFAULT,
  onIconClick: identity,
  affordance: Affordance.EXPANDABLE
};

export default ExpandableCard;
