import { globalConfig } from "configs";

export const getGameSizes = () => ({
  width: Math.min(window.innerWidth, globalConfig.maxWidth),
  height: Math.min(window.innerHeight, globalConfig.maxHeight),
});
