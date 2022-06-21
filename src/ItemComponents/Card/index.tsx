import { CSSProperties, FC } from "react";

import { cardList } from "./config";
import css from "./style.module.scss";

import backgroundUrl from "./assets/front.png";
import descriptionUrl from "./assets/textWrapper.png";
import { typesIcon } from "./assets/types";

export * from "./config";

const cardHeight = parseInt(css.cardHeight);
const cardWidth = parseInt(css.cardWidth);

interface Props {
  configKey: string;
  scale?:
    | number
    | {
        height?: number;
        width?: number;
      };
}

export const Card: FC<Props> = ({ configKey, scale }) => {
  const cardData = cardList[configKey];

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
    <div className={css.scaleWrapper} style={getStyle()}>
      <div className={css.root}>
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
