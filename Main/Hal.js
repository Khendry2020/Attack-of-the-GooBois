export default class createHal extends Phaser.GameObjects.Sprite {
  constructor(HalConfig) {
    super(HalConfig.scene, HalConfig.x, HalConfig.y, "Hal");
    HalConfig.scene.add.existing(this);
    this.setScale(1.8);
    // HalConfig.physics.add
    //   .setBounce(0.2)
    //   .setCollideWorldBounds(true)
    //   .body.setGravityY(1300);
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
    this.keys = this.scene.input.keyboard.addKeys("W,A,D");
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
