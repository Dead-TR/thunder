import { Scene } from "phaser";
import { createCoordinatesFromPosition } from "utils";
import { Position } from "../types";

export class Text {
  scene: Scene;
  text: Phaser.GameObjects.Text;
  value: string | number = "";

  constructor(
    scene: Scene,
    config?: {
      value?: string | number;
      position?: Position;
      style?: Phaser.Types.GameObjects.Text.TextStyle;
    }
  ) {
    const preparedConfig = {
      position: {
        ...(config?.position || {
          top: 10,
          left: 10,
        }),
      },
      value: config?.value?.toString() || "",
      style: {
        color: "black",
        fontSize: "16px",
        ...config?.style,
      },
    };
    const { position, value, style } = preparedConfig;
    this.scene = scene;

    const coordinates = createCoordinatesFromPosition(position);
    this.text = scene.add.text(coordinates.x, coordinates.y, `${value}`, style);

    if (position.origin) {
      const origin =
        typeof position.origin === "number"
          ? [position.origin]
          : position.origin;
      this.text.setOrigin(origin[0], origin[1]);
    }
  }

  update(value: string | number) {
    this.text.setText(`${value}`);
    this.value = value;
  }
}
