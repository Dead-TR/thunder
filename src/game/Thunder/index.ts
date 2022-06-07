import { Scene } from "phaser";
import { Text, Card } from "./essence";
import { PlayersData } from "./types";

export class Thunder {
  scene: Scene;
  playersData: PlayersData;

  constructor(scene: Scene) {
    this.scene = scene;

    const positionValues = {
      enemyTop: "31",
      side: 10,
      playerTop: "44",
    };

    this.playersData = {
      enemy: {
        counts: {
          armor: new Text(scene, {
            value: 0,
            position: {
              left: positionValues.side,
              top: positionValues.enemyTop,

              origin: [0, 0.5],
            },
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: {
              top: "27",
              left: "50",

              origin: 0.5,
            },
          }),
          hp: new Text(scene, {
            value: 0,

            position: {
              right: positionValues.side,
              top: positionValues.enemyTop,

              origin: [1, 0.5],
            },
          }),
          parry: new Text(scene, {
            value: 0,
            position: {
              top: "35",
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
              left: positionValues.side,
              top: positionValues.playerTop,

              origin: [0, 0.5],
            },
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: {
              left: "50",
              top: "40",

              origin: 0.5,
            },
          }),
          hp: new Text(scene, {
            value: 0,
            position: {
              right: positionValues.side,
              top: positionValues.playerTop,

              origin: [1, 0.5],
            },
          }),
          parry: new Text(scene, {
            value: 0,
            position: {
              left: "50",
              top: "48",

              origin: 0.5,
            },
          }),
        },
      },
    };

    const card = new Card(
      scene,
      {
        icon: "_3",
        type: "armor",
        value: "1500",
      },
      {
        top: "10",
        left: "7",

      },
    );
  }
}
