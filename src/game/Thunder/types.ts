import { Text } from "./essence";

export interface Player {
  counts: {
    hp: Text;
    armor: Text;
    parry: Text;
    cardsAmount: Text;
  };
}
export interface PlayersData {
  user: Player;
  enemy: Player;
}

export interface PositionAnchorObject {
  x: number;
  y: number;
  width: number;
  height: number;

  [key: string]: any;
}
export interface Position {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  anchor?: PositionAnchorObject;
  origin?: number | [number] | [number, number];
}
