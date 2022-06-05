import { GameObjects, Scene } from "phaser";

import { imgLoader } from "game/Thunder/utils";
import { config } from "./config";
import { CardType, ConfigType } from "./types";
import { Position } from "game/Thunder/types";
import { createCoordinatesFromPosition, setOrigin } from "utils";

export class Card {
  scene: Scene;
  image: GameObjects.Image | null = null;
  icon: GameObjects.Image | null = null;

  constructor(
    scene: Scene,
    params: {
      icon: keyof ConfigType["icons"];
      type: CardType;
      value?: string | number;
      callBack?: () => void;
    },
    position: Position
  ) {
    this.scene = scene;

    const createImg = async () => {
      try {
        //create background
        const { texture: background } = await imgLoader(scene, {
          ...config.background,
        });
        const { x: bgX, y: bgY } = createCoordinatesFromPosition(position);
        this.image = scene.add.image(bgX, bgY, background).setOrigin(0);

        if (position.origin) {
          this.image.x =
            typeof position.origin === "number"
              ? this.image.x - this.image.width * position.origin
              : this.image.x - this.image.width * position.origin[0];
        }

        console.log("x, width", this.image.x, this.image.width);

        //create icon
        const iconData = config.icons[params.icon];
        const { texture: icon } = await imgLoader(scene, {
          ...iconData,
        });

        const { x: icoX, y: icoY } = createCoordinatesFromPosition({
          anchor: this.image as any,
          top: "50",
          left: "50",
        });

        this.icon = scene.add.image(icoX, icoY, icon);

        //create text
        if (params.value !== undefined) {
          const { x: tX, y: tY } = createCoordinatesFromPosition({
            anchor: this.image,
            top: 15,
            right: 10,
          });
          scene.add.text(tX, tY, `${params.value}`).setOrigin(1, 0.5).setStyle({
            color: "red",
            fontSize: "18px",
            fontFamily: "Arial, san-serif",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    createImg();
  }
}
