import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { cardList } from "./config";
import css from "./style.module.scss";

import backgroundUrl from "./assets/front.png";
import descriptionUrl from "./assets/textWrapper.png";
import { typesIcon } from "./assets/types";
import clsx from "clsx";
import { CardConfig, CardId } from "./types";
import { useThunder } from "providers";

export * from "./config";
export * from "./types";

const cardHeight = parseInt(css.cardHeight);
const cardWidth = parseInt(css.cardWidth);

interface Props {
  cardId: CardId;

  className?: string;
  onAnimaitonEnd?: () => void;

  rightClick?: (data: { card: CardId }) => void;

  scale?:
    | number
    | {
        height?: number;
        width?: number;
      };
}

export const Card: FC<Props> = ({
  cardId,
  scale,
  className,
  onAnimaitonEnd,
  rightClick,
}) => {
  const cardData = cardList[cardId] as CardConfig;

  if (!cardData) {
    return null;
  }

  const { description, name, type, usage, icon, value } = cardData;

  const getStyle = (): CSSProperties | undefined => {
    let scaleValue = 1;

    if (scale) {
      if (typeof scale === "number") {
        scaleValue = scale;
      } else {
        const { height = 0, width = 0 } = scale;
        scaleValue = Math.max(height / cardHeight, width / cardWidth);
      }

      return {
        transform: `scale(${scaleValue})`,
        height: cardHeight * scaleValue,
        width: cardWidth * scaleValue,
      };
    }
  };

  return (
    <div
      className={clsx(css.scaleWrapper)}
      style={{ ...getStyle() }}
      onContextMenu={(e) => {
        e.preventDefault();
        rightClick &&
          rightClick({
            card: cardId,
          });
      }}>
      <div
        className={clsx(css.root, className)}
        onAnimationEnd={() => onAnimaitonEnd && onAnimaitonEnd()}>
        <img src={backgroundUrl} className={css.backgroundImg} />

        <div className={css.descriptionBlock}>
          <img
            src={descriptionUrl}
            alt="description"
            className={css.descriptionIcon}
          />
          <span className={css.descriptionText}>{name}</span>
        </div>

        <div className={css.iconBlock}>
          <img src={icon} alt="icon" className={css.icon} />
        </div>

        {!!value && (
          <div className={css.valueWrapper}>
            <div className={css.valueHeader} />
            <div className={css.valueBlock}>
              <span className={css.value}>{value}</span>
              <div className={css.valueLine} />
              <img src={typesIcon[type]} alt="type" className={css.valueIcon} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
