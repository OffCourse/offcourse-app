import {
  Children,
  cloneElement,
  useCallback,
  useState,
  useEffect
} from "react";
import { identity, contains, isEmpty } from "ramda";
import useCount from "../useCount";
import { Section } from "types";

type VisibleSection = Section | null;

type UseExpandable = (opts: {
  initialLevel?: number;
  layout?: string[][];
  isDisabled?: boolean;
  sections: Section | Section[];
  callback?: (opts: {
    level?: number;
    sectionNames?: string[];
    cycle: () => void;
  }) => void;
}) => {
  level: number;
  sectionNames: string[];
  sections: VisibleSection | VisibleSection[];
  cycle: () => void;
};

const useExpandable: UseExpandable = ({
  initialLevel,
  layout = [],
  isDisabled = false,
  sections: rawSections,
  callback = identity
}) => {
  const maxCount = layout.length > 0 ? layout.length - 1 : 0;
  const initialCount = initialLevel ? initialLevel : maxCount;

  const { count: level, cycle } = useCount({
    initialCount,
    maxCount
  });

  const sectionNames = layout[level] || [];

  const sections = Children.map(rawSections, (child, index) => {
    if (isDisabled) {
      return index === 0 ? child : null;
    }

    if (isEmpty(layout)) {
      return child;
    }

    const { name } = child.props;
    const isVisible = contains(name, sectionNames);
    if (isVisible) {
      return child;
    }
    return null;
  });

  useEffect(() => {
    callback({ level, sectionNames, cycle });
  }, [level]);

  return { level, sectionNames, sections, cycle };
};

export default useExpandable;
