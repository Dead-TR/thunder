import { Main } from "./scene";

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scene: [Main],
  width: 420,
  height: 860,
  parent: "phaser-app-box",

  dom: {
    createContainer: false,
  },
  audio: {
    disableWebAudio: true,
  },
  disableContextMenu: false,
  backgroundColor: "#150a30",
  // backgroundColor: "#0090c9",
  transparent: false,
};
