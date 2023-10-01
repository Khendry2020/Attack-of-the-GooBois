import createCoin from "../Main/Coin.js";
import createGooBoi from "../Main/GooBoi.js";
import createHal from "../Main/Hal.js";

//----Varibles----//
var GooBoi_1;
var Coin_1;
var Coin_2;
var Hal;
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
    this.Hal = new createHal(this, 200, 200);
    Hal;

    //----GooBoi----//
    this.GooBoi_1 = new createGooBoi(this, 500, 200);
    GooBoi_1;

    //----Coin's----//
    this.Coin_1 = new createCoin(this, 500, 400);
    this.Coin_2 = new createCoin(this, 400, 400);
    Coin_1;
    Coin_2;

    //----Collision Mesh----//
    this.physics.add.collider(this.Hal, floor);
    this.physics.add.collider(this.Hal, platform);
  }

  update() {
    //this.cursors = this.input.keyboard.createCursorKeys();
    // this.GooBoi_1.play("idle");
    // this.GooBoi_2.play("idle");
  }
}
