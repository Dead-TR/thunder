import { Main } from "./scene";

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scene: [Main],
  width: 400,
  height: 733,
  parent: "phaser-app-box",

  dom: {
    createContainer: false,
  },
  audio: {
    disableWebAudio: true,
  },
  disableContextMenu: false,
  transparent: true,
};
