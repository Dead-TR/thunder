import { cardList } from "./index";

export type CardId = keyof typeof cardList;
// export type CardConfig = typeof cardList[CardId];
// export type CardType = CardConfig["type"];
// export type CardUsage = CardConfig["usage"];

export type CardType = "atack" | "armor" | "parry" | "treat" | "special";
export type CardUsage = "permanent" | "round" | "once";

export interface CardConfig {
  value?: number | string;
  icon: string;

  name: string;
  description: string;

  type: CardType;
  usage: CardUsage;
}
