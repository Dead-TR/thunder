import React, { createContext } from "react";
import { ThunderManager } from "./Manager";

interface GameContextType {
  manager: ThunderManager;
}

export const GameContext = createContext<GameContextType>({
  manager: {} as ThunderManager,
});
