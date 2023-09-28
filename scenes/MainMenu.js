export class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }
  create() {
    this.add.image(480, 220, "Menu Background");
    this.add.image(470, 150, "Title");

    const play = this.add.sprite(450, 300, "Play").setInteractive();

    play.on("pointerover", function (pointer) {
      this.setTint(0x8a8a8a80);
    });
    play.on("pointerup", function (pointer) {
      this.clearTint();
    });
    play.on("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.time.delayedCall(1000, () => {
        this.scene.start("Level_1");
      });
    });
  }
}
