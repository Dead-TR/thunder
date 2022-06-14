import { useContext } from "react";
import { GameContext } from "./Context";

export * from "./Provider";
export function useThunder() {
  return useContext(GameContext);
}
