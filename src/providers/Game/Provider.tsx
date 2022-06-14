import React, { FC } from "react";

import { GameContext } from "./Context";

interface Props {
  children: React.ReactNode;
}
export const GameProvider: FC<Props> = ({ children }) => {

  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
