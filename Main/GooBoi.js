export default class createGooBoi extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "GooBoi");
    this.scene.add.existing(this);
    this.setScale(2);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setGravityY(660);
    this.body.setCollideWorldBounds(true);
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
  update() {
    this.body.play("idle");
  }
}
