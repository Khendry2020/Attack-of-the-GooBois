export class Animations extends Phaser.Animations.Animation {
  constructor() {
    super({ key: "Animations" });
  }
  create() {
    this.anims.create({
      key: "idle",
      frames: [
        { key: "GooBoi", frame: 0 },
        { key: "GooBoi", frame: 1 },
        { key: "GooBoi", frame: 2 },
        { key: "GooBoi", frame: 3 },
      ],
      frameRate: 8,
      repeat: -1,
    });
  }
}
