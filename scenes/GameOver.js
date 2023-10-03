export class GameOver extends Phaser.Scene {
  constructor(scene) {
    super({ key: "GameOver" }, scene);
  }
  create() {
    var soundConfig = {
      mute: false,
      volume: 0.01,
      rate: 1,
    };
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.gameOverSound.play(soundConfig);
    this.add.image(480, 220, "GameOver");
    const tryAgain = this.add.sprite(450, 300, "TryAgain").setInteractive();

    tryAgain.on("pointerover", function (pointer) {
      this.setTint(0x8a8a8a80);
    });
    tryAgain.on("pointerup", function (pointer) {
      this.clearTint();
    });
    tryAgain.on("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.time.delayedCall(1000, () => {
        this.scene.restart();
      });
    });
  }
}
