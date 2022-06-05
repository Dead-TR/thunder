import { GameObjects, Scene } from "phaser";

import { imgLoader } from "game/Thunder/utils";
import { config } from "./config";
import { CardType } from "./types";
import { Position } from "game/Thunder/types";
import { createCoordinatesFromPosition, setOrigin } from "utils";

export class Card {
  scene: Scene;
  image: GameObjects.Image | null = null;

  constructor(
    scene: Scene,
    params: {
      icon: string;
      type: CardType;
      value?: string | number;
      callBack?: () => void;
    },
    position: Position
  ) {
    this.scene = scene;

    const createImg = async () => {
      try {
        const { texture } = await imgLoader(scene, {
          ...config.background,
        });

        const { x, y } = createCoordinatesFromPosition(position);

        this.image = scene.add.image(x, y, texture);

        setOrigin(this.image, position.origin);
      } catch (error) {
        console.error(error);
      }
    };

    createImg();
  }
}
