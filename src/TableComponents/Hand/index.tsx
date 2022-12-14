import { CardId } from "ItemComponents";
import { useThunder } from "providers";
import { useEffect, useState } from "react";
import { CardRow } from "TableComponents/CardRow";
import css from "./style.module.scss";

export const Hand = () => {
  const { manager } = useThunder();
  const [cards, setCards] = useState(manager.getCards("hand"));

  useEffect(() => {
    const list = manager.getCards("hand");
    console.log(list, cards);

    manager.listenCards("hand", (hand) => {
      console.log("hand", hand);
    });

    return () => {};
  }, []);

  return (
    <div className={css.hand}>
      <CardRow cardList={cards} />
    </div>
  );
};
