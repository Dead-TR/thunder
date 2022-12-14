import { CardId } from "ItemComponents";

export interface PlayerCards {
  deck: CardId[];
  hand: CardId[];
  reject: CardId[];
}

export interface State {
  playerCards: PlayerCards;
  enemieCards: PlayerCards;

}
