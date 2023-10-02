Phaser.Input.Keyboard;
export class Movement extends Phaser.Input.Keyboard {
  constructor() {
    super();
  }
  update() {
    console.log("createHal - update()");
    if (this.scene.cursors.A.isDown) {
      this.body.setFlipX(true);
      this.body.setVelocityX(-160);
      console.log("Left");
    } else if (this.scene.cursors.D.isDown) {
      this.body.setFlipX(false);
      this.body.setVelocityX(160);
      console.log("Right");
    } else {
      this.setVelocityX(0);
    }

    if (this.scene.cursors.W.isDown && this.body.touching.down) {
      this.body.setVelocityY(-650);
      console.log("Jump");
    }
  }
}
