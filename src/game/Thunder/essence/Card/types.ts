import { Position } from "game/Thunder/types";

export type CardType = "atack" | "armor" | "parry" | "treat" | "special";
export type CardUsage = "permanent" | "round" | "once";
export interface IconsData {
  id: string;
  link: string;
}
export interface ConfigType {
  background: IconsData;

  icons: {
    _1: IconsData;
    _2: IconsData;
    _3: IconsData;
  };
}

export interface CardPositionParams extends Omit<Position, "origin"> {
  width?: string | number;
  height?: string | number;
}

export interface CardConfig {
  type: CardType;
  background?: string;
  icon: string;
  value?: string | number;
  callBack?: () => void;
  description?: string;
  name?: string;

  usage: CardUsage;
}
