import { CardType, CardUsage } from "./types";
import css from "./style.module.scss";
import backgroundUrl from "./assets/frontBg.png";

export * from "./config";
interface Props {
  icon: string | JSX.Element;
  type: CardType;
  value: number;
  description: string;
  name: string;
  usage: CardUsage;
}

export const Card = () => {
  return (
    <div className={css.root}>
      <img src={backgroundUrl} />
    </div>
  );
};
