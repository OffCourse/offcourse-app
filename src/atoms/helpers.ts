import { trimLeft, titleCase, lowerCase } from "voca";
import { map, compose, filter, identity } from "ramda";

const titleize: (str: string) => string = (str: string) =>
  titleCase(str, ["'", "-", "’"]);

const formatTitle: (str: string) => string = compose(
  trimLeft,
  titleize,
  lowerCase
);

const compact: <T>(arg: T[]) => T[] = filter(
  compose(
    Boolean,
    identity
  )
);

export { compose, map, filter, compact, lowerCase, formatTitle };
