import { FC, Fragment, useEffect, useState } from "react";

import { useResizeObserver } from "general/hooks";
import { Card, CardId } from "ItemComponents";
import clsx from "clsx";
import css from "./style.module.scss";
import { useThunder } from "providers";

interface Props {
  cardList: CardId[];
}

export const CardRow: FC<Props> = ({ cardList }) => {
  const { manager } = useThunder();

  const [cardsScale, setCardsScale] = useState(0);
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [cardsOnDysplay, setCardsOnDysplay] = useState<
    {
      card: CardId;
      isAnimated: boolean;
    }[]
  >(
    cardList[0]
      ? [
          {
            card: cardList[0],
            isAnimated: false,
          },
        ]
      : [],
  );

  useResizeObserver(
    ([{ target }]) => {
      if (target) {
        const root = target as HTMLDivElement;
        const { offsetHeight, offsetWidth, scrollWidth } = root;
        setCardsScale(offsetHeight);

        if (scrollWidth > offsetWidth) {
          root.style.justifyContent = "flex-start";
        } else {
          root.style.justifyContent = "";
        }
      }
    },
    root,
    [cardsScale],
  );

  return (
    <div className={css.root} ref={(node) => setRoot(node)}>
      {cardsOnDysplay.map(({ card, isAnimated }, index) => {
        return (
          <Fragment key={`handCard#${card}_${index}`}>
            <Card
              cardId={card}
              scale={{ height: cardsScale }}
              className={clsx(!isAnimated && css.slide)}
              onAnimaitonEnd={() => {
                setCardsOnDysplay((old) => {
                  const newList = old.map(({ card }) => ({
                    isAnimated: true,
                    card,
                  }));

                  const newCard = cardList[newList.length - 1];
                  newList.push({
                    card: newCard,
                    isAnimated: false,
                  });

                  return newList;
                });
              }}
              rightClick={({ card }) => {
                manager.readCard(card);
              }}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
