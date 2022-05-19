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
