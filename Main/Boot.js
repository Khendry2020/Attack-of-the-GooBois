export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "Boot" });
  }
  preload() {
    this.load.path = "./assets/";
    //----Menu----//
    this.load.image("Title", "Menu/Title.png");
    this.load.image("Play", "Menu/Button_Play.png");
    //----Win----//
    this.load.image("YouWin", "Win/Level_Complete.png");
    this.load.image("NextLevel", "Win/Next_Level.png");
    //----GameOver----//
    this.load.image("TryAgain", "GameOver/Try_Again.png");
    //----Hal----//
    this.load.image("Hal", "Player/Hal.png");
    //---=Background images----//
    this.load.image("Menu Background", "Menu/Main_Menu_Background.png");
    this.load.image(
      "Level_1_Background",
      "Level/Level_1/Level_1_Background.png"
    );
    this.load.image("GameOver", "GameOver/Gameover.png");
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
    this.load.audio("LaserShot", "Sounds/Laser.mp3");
  }

  create() {
    //----Background Music----//
    this.music = this.sound.add("BackgroundMusic");
    var musicConfig = {
      mute: false,
      volume: 0.05,
      rate: 1,
      loop: true,
    }; //----Animations----//
    //--GooBoi--//
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
    //--Coin--//
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
    this.music.play(musicConfig);
    //----Load Level----//
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.time.delayedCall(1000, () => {
      this.scene.start("MainMenu");
    });
  }
}
