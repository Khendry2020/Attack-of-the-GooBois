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
    this.keys = this.scene.input.keyboard.addKeys("W,A,D");
    if (this.scene.keys.A.isDown) {
      this.body.setFlipX(true);
      this.body.setVelocityX(-160);
      console.log("Left");
    } else if (this.scene.keys.D.isDown) {
      this.body.setFlipX(false);
      this.body.setVelocityX(160);
      console.log("Right");
    } else {
      this.setVelocityX(0);
    }

    if (this.scene.keys.W.isDown && this.body.touching.down) {
      this.body.setVelocityY(-650);
      console.log("Jump");
    }
  }
}
