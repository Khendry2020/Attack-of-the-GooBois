import { createHal } from "../Main/Hal.js";

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

    //----Hal----//
    var Hal;
    Hal = this.physics.add.existing(new createHal(this, 420, 225));

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
  }
}
