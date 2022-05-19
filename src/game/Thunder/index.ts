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
            position: [200, 390],
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: [370, 360],
          }),
          hp: new Text(scene, {
            value: 0,
            position: [200, 330],
          }),
          parry: new Text(scene, {
            value: 0,
            position: [20, 360],
          }),
        },
      },
      user: {
        counts: {
          armor: new Text(scene, {
            value: 0,
            position: [200, 285],
          }),
          cardsAmount: new Text(scene, {
            value: 0,
            position: [370, 255],
          }),
          hp: new Text(scene, {
            value: 0,
            position: [200, 225],
          }),
          parry: new Text(scene, {
            value: 0,
            position: [20, 255],
          }),
        },
      },
    };

    console.log(this.playersData);
  }
}
