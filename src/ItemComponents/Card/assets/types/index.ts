import { CardType } from "ItemComponents/Card/types";
import special from "./special.png";
import atack from "./attack.png";
import parry from "./parry.png";
import armor from "./armor.png";
import treat from "./hp.png";

export const typesIcon: Record<CardType, string> = {
  armor,
  atack,
  parry,
  treat,
  special,
};
