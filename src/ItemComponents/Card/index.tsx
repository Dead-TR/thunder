import { FC } from "react";

import { cardList } from "./config";
import css from "./style.module.scss";

import backgroundUrl from "./assets/front.png";
import descriptionUrl from "./assets/textWrapper.png";
import { typesIcon } from "./assets/types";

export * from "./config";

interface Props {
  configKey: string;
}

export const Card: FC<Props> = ({ configKey }) => {
  const cardData = cardList[configKey];

  if (!cardData) {
    return null;
  }

  const { description, name, type, usage, icon, value } = cardData;

  return (
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
  );
};
