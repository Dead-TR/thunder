import { FC, Fragment, useState } from "react";

import { useResizeObserver } from "general/hooks";
import { Card } from "ItemComponents";
import css from "./style.module.scss";

interface Props {
  cardList: string[];
}

export const CardRow: FC<Props> = ({ cardList }) => {
  const [cardsScale, setCardsScale] = useState(0);
  const [root, setRoot] = useState<HTMLDivElement | null>(null);

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
      {cardList.map((value, i) => (
        <Fragment key={`handCard#${value}_${i}`}>
          <Card
            configKey={value}
            scale={{
              height: cardsScale,
            }}
          />
        </Fragment>
      ))}
    </div>
  );
};
