import { CardId } from "ItemComponents";
import { RowsManager } from "./entities";
import { State } from "./type";

export class ThunderManager {
  state: State = {
    playerCards: {
      deck: [],
      hand: [],
      reject: [],
    },
    enemieCards: {
      deck: [],
      hand: [],
      reject: [],
    },
  };

  private rowsManager: RowsManager;

  constructor(playerCards: CardId[], enemieCards: CardId[]) {
    const { enemieCards: enemie, playerCards: user } = this.state;
    enemie.deck.push(...enemieCards);
    user.deck.push(...playerCards);

    this.rowsManager = new RowsManager(this);

    this.rowsManager.toDealCards();
  }

  readCard(cardId: CardId) {
    this.rowsManager.showCardInfo(cardId);
  }

  getCards<Key extends keyof typeof this.rowsManager.cardsGetters>(key: Key) {
    const callBack = this.rowsManager.cardsGetters[key];
    return callBack();
  }

  setCards<Key extends keyof typeof this.rowsManager.cardSetters>(
    key: Key,
    value: Parameters<typeof this.rowsManager.cardSetters[Key]>[0],
  ) {
    const callBack = this.rowsManager.cardSetters[key];
    callBack(value);
  }

  listenCards<Key extends keyof typeof this.rowsManager.cardListeners>(
    key: Key,
    callBack: Parameters<typeof this.rowsManager.cardListeners[Key]>[0],
  ) {
    const listener = this.rowsManager.cardListeners[key];
    //@ts-ignore
    return listener(callBack);
  }
}

export * from "./config";
export * from "./type";
