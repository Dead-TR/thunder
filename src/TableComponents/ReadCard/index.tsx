import React, { useEffect, useState } from "react";

import { Card, CardId, cardList } from "ItemComponents";
import { useThunder } from "providers";
import { Modal } from "components";
import css from "./style.module.scss";

export const ReadCard = () => {
  const { manager } = useThunder();
  const [cardId, setCardId] = useState<CardId | null>(null);

  useEffect(() => {
    const remove = manager.listenCards("cardInfo", (card) => {
      setCardId(card);
    });

    return () => {
      remove();
    };
  }, []);

  if (cardId) {
    return (
      <>
        <Modal handleClose={() => setCardId(null)}>
          <div className={css.root}>
            <Card cardId={cardId} scale={1} />
            <div className={css.description}>
              <span>{cardList[cardId].description}</span>
            </div>
          </div>
        </Modal>
      </>
    );
  } else return null;
};
