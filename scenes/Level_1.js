export class Level_1 extends Phaser.Scene {
  constructor() {
    super({ key: "Level_1" });
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    //----Level----//
    this.add.image(480, 200, "Level_1_Background");
    var platform = this.physics.add.staticGroup();
    var floor = this.physics.add.staticGroup();
    //let PlatformSmall_1 = platform.create(300, 300, 'PlatformSmall');
    let PlatformLong_1 = platform.create(475, 250, "PlatformLong");
    PlatformLong_1.setScale(1.5);
    //PlatformSmall_1.setScale(1.2);
    floor.create(480, 440, "Floor").refreshBody();

    //----this.Hal----//
    this.Hal = this.physics.add
      .sprite(50, 320, "Hal")
      .setScale(2.5)
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .body.setGravityY(1300);

    //----GooBoi's----//
    this.GooBoi_1 = this.physics.add
      .sprite(60, 400, "GooBoi")
      .setScale(1.5)
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .setGravityY(1300);

    this.GooBoi_2 = this.physics.add
      .sprite(420, 225, "GooBoi")
      .setScale(1.5)
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .setGravityY(1300);

    //----Spawn this.Hal----//
  }

  update() {
    this.GooBoi_1.play("idle");
    this.GooBoi_2.play("idle");

    //----Player Movement----//
    var keys = this.input.keyboard.addKeys("W,A,D");
    if (keys.A.isDown) {
      this.Hal.setFlipX(true);
      this.Hal.setVelocityX(-160);
      console.log("Left");
    } else if (keys.D.isDown) {
      this.Hal.setFlipX(false);
      this.Hal.setVelocityX(160);
      console.log("Right");
    } else {
      this.Hal.setVelocityX(0);
    }
    if (keys.W.isDown && this.Hal.body.touching.down) {
      this.Hal.setVelocityY(-650);
      console.log("Jump");
    }
  }
}
