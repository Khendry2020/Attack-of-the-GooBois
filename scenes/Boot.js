export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "Boot" });
  }
  preload() {
    this.load.path = "./assets/";
    //----Menu----//
    this.load.image("Title", "Menu/Title.png");
    this.load.image("Play", "Menu/Button_Play.png");
    //----Hal----//
    this.load.image("Hal", "Player/Hal.png");
    //---=Background images----//
    this.load.image("Menu Background", "Menu/Main_Menu_Background.png");
    this.load.image("Level_1_Background", "Level/Level_Tile.png");
    //----Platforms/Floor----//
    this.load.image("Floor", "Level/Floor.png");
    this.load.image("PlatformSmall", "Level/Platform_small.png");
    this.load.image("PlatformLong", "Level/Platform_Long.png");
    //----Laser----//
    this.load.image("Laser", "Weapons/Laser.png");
    //----Pickups---//
    this.load.atlas(
      "Coin",
      "Animations/Items/Coin.png",
      "Animations/Items/Coin.json"
    );
    //----Enemies----//
    this.load.atlas(
      "GooBoi",
      "Animations/Enemies/GooBoi_Move.png",
      "Animations/Enemies/GooBoi_Move.json"
    );
    //----Sounds----//
    this.load.audio("BackgroundMusic", "Sounds/BackgroundMusic.mp3");
    this.load.audio("CollectSound", "Sounds/CollectCoin.mp3");
    this.load.audio("GameOverSound", "Sounds/Game_Over.mp3");
    this.load.audio("WinSound", "Sounds/Win.mp3");
  }

  create() {
    //----Background Music----//
    this.music = this.sound.add("BackgroundMusic");
    var musicConfig = {
      mute: false,
      volume: 0.05,
      rate: 1,
      loop: true,
    };
    this.music.play(musicConfig);
    //----Collision Mesh----//
    // Hal = this.HalCreate();
    // this.physics.add.collider(Hal, floor);
    // this.physics.add.collider(Hal, platform);
    // this.physics.add.collider(Hal, Coin_1, pickupCoin1, null, this);
    // this.physics.add.collider(Hal, Coin_2, pickupCoin2, null, this);

    //--GooBoi Animation--//
    this.anims.create({
      key: "idle",
      frames: [
        { key: "GooBoi", frame: 0 },
        { key: "GooBoi", frame: 1 },
        { key: "GooBoi", frame: 2 },
        { key: "GooBoi", frame: 3 },
      ],
      frameRate: 8,
      repeat: -1,
    });

    //--Coin Animation--//
    this.anims.create({
      key: "coin",
      frames: [
        { key: "Coin", frame: 0 },
        { key: "Coin", frame: 1 },
        { key: "Coin", frame: 2 },
        { key: "Coin", frame: 3 },
        { key: "Coin", frame: 4 },
        { key: "Coin", frame: 5 },
        { key: "Coin", frame: 6 },
        { key: "Coin", frame: 7 },
        { key: "Coin", frame: 8 },
        { key: "Coin", frame: 9 },
        { key: "Coin", frame: 10 },
        { key: "Coin", frame: 11 },
        { key: "Coin", frame: 12 },
        { key: "Coin", frame: 13 },
        { key: "Coin", frame: 14 },
        { key: "Coin", frame: 15 },
      ],
      frameRate: 8,
      repeat: -1,
    });
  }

  update() {
    this.scene.start("MainMenu");
    //----Player Movement----//
    // var keys = this.input.keyboard.addKeys("W,A,D");
    // if (keys.A.isDown) {
    //   Hal.setFlipX(true);
    //   Hal.setVelocityX(-160);
    //   console.log("Left");
    // } else if (keys.D.isDown) {
    //   Hal.setFlipX(false);
    //   Hal.setVelocityX(160);
    //   console.log("Right");
    // } else {
    //   Hal.setVelocityX(0);
    // }

    // if (keys.W.isDown && Hal.body.touching.down) {
    //   Hal.setVelocityY(-650);
    //   console.log("Jump");
    // }
  }
  HalCreate(x, y) {
    Hal = this.physics.add.sprite(x, y, "Hal").setScale(1.8);
    Hal.setBounce(0.2);
    Hal.setCollideWorldBounds(true);
    Hal.body.setGravityY(1300);
    return Hal;
  }

  GooboiCreate(x, y) {
    GooBoi = this.physics.add.sprite(x, y, "GooBoi").setScale(1.5);
    GooBoi.setBounce(0.2).setCollideWorldBounds(true).setGravityY(1300);
    return GooBoi;
  }
  CoinCreate(x, y) {
    Coin = this.physics.add.sprite(x, y, "Coin").setScale(1.8);
    return Coin;
  }
}
