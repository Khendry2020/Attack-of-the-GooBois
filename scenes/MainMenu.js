export class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }
  create() {
    this.add.image(480, 220, "Menu Background");
    this.add.image(470, 150, "Title");
    this.add.image(450, 300, "Play");
  }
  update() {}
}
