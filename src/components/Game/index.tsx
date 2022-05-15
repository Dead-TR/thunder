import React, { Suspense } from "react";
import { LazyComponentLoader } from "utils";
import css from "./style.module.scss";

const GameComponent = React.lazy(() =>
  LazyComponentLoader(import("game/Component"))
);

export const Game = () => {
  return (
    <div
    className={css.root}
    >
      <Suspense fallback={<p>Loading</p>}>
        <GameComponent />
      </Suspense>
    </div>
  );
};
