import { Scene } from "phaser";

export class Text {
  scene: Scene;
  text: Phaser.GameObjects.Text;
  value: string | number = "";

  constructor(
    scene: Scene,
    config?: {
      value?: string | number;
      position?: [number, number];
      style?: Phaser.Types.GameObjects.Text.TextStyle;
    }
  ) {
    const preparedConfig = {
      position: [...(config?.position || [0, 10])],
      value: config?.value?.toString() || "",
      style: {
        color: "black",
        fontSize: "16px",
        ...config?.style,
      },
    };
    const { position, value, style } = preparedConfig;
    this.scene = scene;
    this.text = scene.add.text(position[0], position[1], `${value}`, style);
  }

  update(value: string | number) {
    this.text.setText(`${value}`);
    this.value = value;
  }
}
