class createGooBoi extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "GooBoi")
      .setScale(1.5)
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .setGravityY(1300);
  }
}
