import { GameObjects, Scene } from "phaser";

import { imgLoader } from "game/Thunder/utils";
import { config } from "./config";
import { CardPositionParams, CardType, ConfigType } from "./types";
import { Position } from "game/Thunder/types";
import { createCoordinatesFromPosition, setOrigin } from "utils";
import { scaleFromSizes } from "utils/scaleFromSizes";

export class Card {
  scene: Scene;
  container: GameObjects.Container | null = null;
  image: GameObjects.Image | null = null;
  icon: GameObjects.Image | null = null;
  text: GameObjects.Text | null = null;

  constructor(
    scene: Scene,
    params: {
      icon: keyof ConfigType["icons"];
      type: CardType;
      value?: string | number;
      callBack?: () => void;
    },
    position: CardPositionParams
  ) {
    this.scene = scene;

    const createImg = async () => {
      try {
        //download elements
        const { texture: background } = await imgLoader(scene, {
          ...config.background,
        });

        const iconData = config.icons[params.icon];
        const { texture: icon } = await imgLoader(scene, {
          ...iconData,
        });

        //create container
        const { x: bgX, y: bgY } = createCoordinatesFromPosition(position);
        this.container = scene.add.container(bgX, bgY).setSize(200, 400);

        //create background
        this.image = scene.add.image(0, 0, background).setOrigin(0);
        scaleFromSizes(this.image, {
          width: 200,
          height: 400,
        });

        //create icon
        this.icon = scene.add.image(100, 200, icon).setOrigin(0.5);

        //create text
        if (params.value !== undefined) {
          this.text = scene.add
            .text(200, 20, `${params.value}`)
            .setOrigin(1, 0)
            .setStyle({
              color: "red",
              fontSize: "40px",
              fontFamily: "Arial, san-serif",
            });
        }

        //scale image
        const scaleUnits = [this.image, this.icon, this.text];

        scaleUnits.forEach((element) => {
          if (element) {
            this.container?.add(element);
          }
        });

        if (position.width || position.height) {
          scaleFromSizes(this.container, {
            width: position.width,
            height: position.height,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    createImg();
  }
}
