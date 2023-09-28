export class Level_1 extends Phaser.Scene {
  constructor() {
    super({ key: "Level_1" });
  }

  create() {
    var platform = this.physics.add.staticGroup();
    var floor = this.physics.add.staticGroup();
    //let PlatformSmall_1 = platform.create(300, 300, 'PlatformSmall');
    let PlatformLong_1 = platform.create(500, 250, "PlatformLong");

    Coin_1 = this.physics.add.sprite(50, 320, "Coin").setScale(1.8);
    Coin_2 = this.physics.add.sprite(100, 320, "Coin").setScale(1.8);

    PlatformLong_1.setScale(1.5);
    //PlatformSmall_1.setScale(1.2);
    floor.create(300, 367, "Floor").refreshBody();
    //----Level----//
    this.add.image(300, 180, "Level_1_Background");
  }
}
