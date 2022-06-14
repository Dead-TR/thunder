import { FC } from "react";
import { Content } from "./components";
import css from "./style.module.scss";

interface Props {
  user?: boolean;
}

export const Stats: FC<Props> = ({ user }) => {
  return (
    <div className={css.stats}>
      <Content title="Парирування" value={0} />
      <Content title="Здоров'я" value={0} />
      <Content title="Броня" value={0} />
    </div>
  );
};
