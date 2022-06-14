import { Stats, PermanentCards, RoundCards, Hand } from "TableComponents";
import css from "./style.module.scss";

export const Wrapper = () => {
  return (
    <div className={css.appWrapper}>
      <RoundCards />
      <PermanentCards />
      <Stats />
      <hr />
      <Stats />
      <PermanentCards />
      <RoundCards />
      <Hand />
    </div>
  );
};
