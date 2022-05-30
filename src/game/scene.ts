import { Scene } from "phaser";
import { Thunder } from "./Thunder";

export class Main extends Scene {
  thunder?: Thunder;

  preload() {}
  create() {
    this.thunder = new Thunder(this);

    // this.input.on("pointerdown", () => {
    //   this.thunder?.playersData.user.counts.cardsAmount.update(
    //     (Number(this.thunder?.playersData.user.counts.cardsAmount.value) || 0) + 10
    //   );
    // });
  }
  update(time: number, delta: number): void {}
}
