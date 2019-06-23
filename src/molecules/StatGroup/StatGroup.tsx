import React, { FunctionComponent, Children } from "react";
import Stat from "../Stat";
import StatGroupWrapper from "./StatGroupWrapper";
import { Variant, Direction, Size } from "enums";

type StatType = {
  iconName: string;
  label: string;
};

type StatGroupProps = {
  stats: StatType[];
  children: any;
  direction?: Direction.HORIZONTAL | Direction.VERTICAL;
  variant?: Variant.DEFAULT | Variant.NEGATIVE;
};

const StatGroup: FunctionComponent<StatGroupProps> = ({
  direction = Direction.HORIZONTAL,
  variant = Variant.DEFAULT,
  stats,
  children
}) => {
  if (stats) {
    return (
      <StatGroupWrapper>
        {stats.map(({ iconName, label }) => (
          <Stat
            key={label}
            variant={variant}
            direction={direction}
            iconName={iconName}
            label={label}
          />
        ))}
      </StatGroupWrapper>
    );
  }

  if (children) {
    return (
      <StatGroupWrapper>
        {Children.map(children, child => {
          return React.cloneElement(child, { variant, direction });
        })}
        ;
      </StatGroupWrapper>
    );
  }

  return null;
};

export default StatGroup;
