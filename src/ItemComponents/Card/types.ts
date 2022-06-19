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
