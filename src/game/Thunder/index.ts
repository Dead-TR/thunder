import { Scene } from "phaser";
import { Text } from "./essence";
import { PlayersData } from "./types";

export class Thunder {
  scene: Scene;
  playersData: PlayersData;

  constructor(scene: Scene) {
    this.scene = scene;

    this.playersData = {
      enemy: {
        counts: {
          armor: new Text(scene, {
            value: 0,
            position: {
              left: 10,
              top: "43",

              origin: [0, 0.5],
            },
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: {
              top: "37",
              left: "50",

              origin: 0.5,
            },
          }),
          hp: new Text(scene, {
            value: 0,

            position: {
              right: 10,
              top: "43",

              origin: [1, 0.5],
            },
          }),
          parry: new Text(scene, {
            value: 0,
            position: {
              top: "48",
              left: "50",

              origin: 0.5,
            },
          }),
        },
      },
      user: {
        counts: {
          armor: new Text(scene, {
            value: 0,
            position: {
              left: 10,
              bottom: "41",

              origin: [0, 0.5],
            },
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: {
              left: "50",
              bottom: "46",

              origin: 0.5,
            },
          }),
          hp: new Text(scene, {
            value: 0,
            position: {
              right: 10,
              bottom: "41",

              origin: [1, 0.5],
            },
          }),
          parry: new Text(scene, {
            value: 0,
            position: {
              left: "50",
              bottom: "35",

              origin: 0.5,
            },
          }),
        },
      },
    };

    console.log(this.playersData);
  }
}
