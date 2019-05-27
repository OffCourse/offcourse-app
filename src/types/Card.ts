import { Affordance } from "enums";

type Card = {
  affordance?: Affordance.SELECTABLE | Affordance.NONE;
  width?: string | string[];
};

export default Card;
