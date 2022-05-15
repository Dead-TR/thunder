import { Game } from "components";
import css from "./style.module.scss";

export const App = () => {
  return <div className={css.root}>
    <Game />
  </div>;
}

