import { Scene } from "phaser";
import { Thunder } from "./Thunder";

export class Main extends Scene {
  thunder?: Thunder;

  preload() {}
  create() {
    this.thunder = new Thunder(this);

    // this.input.on("pointerdown", () => {
    //   this.thunder?.playersData.user.counts.hp.update(
    //     (Number(this.thunder?.playersData.user.counts.hp.value) || 0) + 1
    //   );
    // });
  }
  update(time: number, delta: number): void {}
}
