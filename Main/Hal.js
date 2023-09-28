export class createHal extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Hal");
    console.log("createHal");
  }
  create() {
    this.setScale(1.8);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.body.setGravityY(1300);
    console.log("createHal - create()");
  }

  update() {
    //----Player Movement----//
    console.log("createHal - update()");
    this.keys = this.input.keyboard.addKeys("W,A,D");
    if (this.keys.A.isDown) {
      this.setFlipX(true);
      this.setVelocityX(-160);
      console.log("Left");
    } else if (this.keys.D.isDown) {
      this.setFlipX(false);
      this.setVelocityX(160);
      console.log("Right");
    } else {
      this.setVelocityX(0);
    }

    if (this.keys.W.isDown && this.body.touching.down) {
      this.setVelocityY(-650);
      console.log("Jump");
    }
  }
}
