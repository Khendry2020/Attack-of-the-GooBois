export default class createHal extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Hal");
    this.scene.add.existing(this);
    this.setScale(2);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setGravityY(660);
    this.body.setCollideWorldBounds(true);
  }

  update() {
    //----Player Movement----//
    console.log("createHal - update()");
    if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(190);
    } else if (scene.cursors.left.isDown) {
      this.body.setVelocityX(-190);
    } else {
      this.body.setVelocityX(0);
    }
  }
}
