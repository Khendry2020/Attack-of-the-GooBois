export default class createCoin extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Coin");
    this.scene.add.existing(this);
    this.setScale(2);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setCollideWorldBounds(true);
  }
  create() {
    this.anims.create({
      key: "coin",
      frames: [
        { key: "Coin", frame: 0 },
        { key: "Coin", frame: 1 },
        { key: "Coin", frame: 2 },
        { key: "Coin", frame: 3 },
        { key: "Coin", frame: 4 },
        { key: "Coin", frame: 5 },
        { key: "Coin", frame: 6 },
        { key: "Coin", frame: 7 },
        { key: "Coin", frame: 8 },
        { key: "Coin", frame: 9 },
        { key: "Coin", frame: 10 },
        { key: "Coin", frame: 11 },
        { key: "Coin", frame: 12 },
        { key: "Coin", frame: 13 },
        { key: "Coin", frame: 14 },
        { key: "Coin", frame: 15 },
      ],
      frameRate: 8,
      repeat: -1,
    });
  }
  update() {
    this.body.play("coin");
  }
}
