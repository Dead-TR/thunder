import { EventEmitter } from "events";
import { CardId } from "ItemComponents";
import { between } from "utils";
import { PlayerCards, ThunderManager } from "../..";
import { thunderConfiguration } from "../../config";
import { SHOW_CARD_INFO_EVENT, UPDATE_CARD_EVENT } from "./config";

export class RowsManager {
  private manager: ThunderManager;
  private emitter = new EventEmitter();

  private playerCards: PlayerCards;
  private enemieCards: PlayerCards;

  constructor(manager: ThunderManager) {
    this.manager = manager;
    const { enemieCards, playerCards } = manager.state;

    this.playerCards = playerCards;
    this.enemieCards = enemieCards;
  }

  toDealCards() {
    const { defaultHandCardAmount } = thunderConfiguration;
    this.fromDeckToHand(this.playerCards, defaultHandCardAmount);
  }

  private fromDeckToHand(list: PlayerCards, handSize: number) {
    const { deck, hand } = list;
    deck.sort(() => between(-1, 1));

    for (let index = 0; index < handSize; index++) {
      if (deck.length) {
        const card = deck.shift();
        if (card) hand.push(card);
      }
    }

    this.setHandCards(hand);
  }

  //#region Emitter
  private createListener(event: string, callBack: (v: any) => void) {
    this.emitter.addListener(event, callBack);
    return () => this.emitter.removeListener(event, callBack);
  }

  private getHandCards = () => {
    return this.manager.state.playerCards.hand;
  };
  private listenHandCards = (callBack: (cards: CardId[]) => void) => {
    return this.createListener(UPDATE_CARD_EVENT, callBack);
  };
  private setHandCards = (cards: CardId[]) => {
    this.emitter.emit(UPDATE_CARD_EVENT, cards);
  };

  showCardInfo = (id: CardId) => {
    this.emitter.emit(SHOW_CARD_INFO_EVENT, id);
  };
  private cardInfoListener = (callBack: (v: CardId) => void) => {
    return this.createListener(SHOW_CARD_INFO_EVENT, callBack);
  };

  cardsGetters = {
    hand: this.getHandCards,
  };
  cardSetters = {
    hand: this.setHandCards,
  };
  cardListeners = {
    hand: this.listenHandCards,
    cardInfo: this.cardInfoListener,
  };

  //#endregion Emitter
}
