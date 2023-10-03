import createCoin from "../Main/Coin.js";
import createGooBoi from "../Main/GooBoi.js";
import createHal from "../Main/Hal.js";
import { GameOver } from "./GameOver.js";

//----Varibles----//
var GooBoi_1;
var Coin_1;
var Coin_2;
var Hal;
const win = 2;
var coinCount = 0;
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
    var PlatformSmall_1 = platform.create(300, 300, "PlatformSmall");
    PlatformSmall_1.setSize(72, 16).setScale(1.8);
    let PlatformLong_1 = platform.create(475, 250, "PlatformLong");
    PlatformLong_1.setScale(1.5);
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

    //----Animations----//
    this.GooBoi_1.play("idle");
    this.Coin_1.play("coin");
    this.Coin_2.play("coin");
  }

  update() {
    this.Hal.update();
    //----Collect Coin_1----//
    this.physics.add.overlap(
      this.Hal,
      this.Coin_1,
      function (Hal, coin) {
        this.sound.play("CollectSound");
        coinCount = coinCount + 1;
        coin.destroy();
      },
      null,
      this
    );
    //----Collect Coin_2----//
    this.physics.add.overlap(
      this.Hal,
      this.Coin_2,
      function (Hal, coin) {
        this.sound.play("CollectSound");
        coinCount = coinCount + 1;
        coin.destroy();
      },
      null,
      this
    );
    //----Win----//
    if (coinCount >= win) {
      this.sound.play("WinSound");
      this.add.image(480, 220, "YouWin");
      const NextLevel = this.add.sprite(450, 300, "NextLevel").setInteractive();

      NextLevel.on("pointerover", function (pointer) {
        this.setTint(0x8a8a8a80);
      });
      NextLevel.on("pointerup", function (pointer) {
        this.clearTint();
      });
      NextLevel.on("pointerdown", () => {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.time.delayedCall(1000, () => {
          this.scene.start("Level_2");
        });
      });
    }
    //----Die----//
    if (this.physics.add.overlap(this.Hal, this.GooBoi_1)) {
      this.gameOverSound = this.sound.add("GameOverSound");
      var soundConfig = {
        mute: false,
        volume: 0.01,
        rate: 1,
      };
      this.cameras.main.fadeIn(1000, 0, 0, 0);
      this.gameOverSound.play(soundConfig);
      this.add.image(480, 220, "GameOver");
      const tryAgain = this.add.sprite(450, 300, "TryAgain").setInteractive();

      tryAgain.on("pointerover", function (pointer) {
        this.setTint(0x8a8a8a80);
      });
      tryAgain.on("pointerup", function (pointer) {
        this.clearTint();
      });
      tryAgain.on("pointerdown", () => {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.time.delayedCall(1000, () => {
          this.scene.restart();
        });
      });
    }
  }
}
