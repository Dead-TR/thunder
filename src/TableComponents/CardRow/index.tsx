import { FC, Fragment, useEffect, useState } from "react";

import { useResizeObserver } from "general/hooks";
import { Card } from "ItemComponents";
import css from "./style.module.scss";
import clsx from "clsx";

interface Props {
  cardList: string[];
}

export const CardRow: FC<Props> = ({ cardList }) => {
  const [cardsScale, setCardsScale] = useState(0);
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [cardsOnDysplay, setCardsOnDysplay] = useState<
    {
      card: string;
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

  console.log("CardRow", cardsOnDysplay);

  useEffect(() => {
    return () => {};
  }, []);

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
      {/* {cardList.map((value, i) => (
        <Fragment key={`handCard#${value}_${i}`}>
          <Card
            configKey={value}
            scale={{
              height: cardsScale,
            }}
          />
        </Fragment>
      ))} */}
      {cardsOnDysplay.map(({ card, isAnimated }, index) => {
        return (
          <Fragment key={`handCard#${card}_${index}`}>
            <Card
              configKey={card}
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
            />
          </Fragment>
        );
      })}
    </div>
  );
};
