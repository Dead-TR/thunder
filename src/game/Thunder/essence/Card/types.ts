import { Position } from "game/Thunder/types";

export type CardType = "atack" | "armor" | "parry" | "treat" | "special";

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
