import { CardRow } from "TableComponents/CardRow";
import css from "./style.module.scss";

const cardsInHand = [
  "attack_1",
  "armor_1",
  "clear_round",
  "parry_1",
  "treat_1",
  "special_hand_1",
  "special_reuse",
  "special_steal",
];

export const Hand = () => {

  return (
    <div className={css.hand}>
      <CardRow cardList={cardsInHand} />
    </div>
  );
};
