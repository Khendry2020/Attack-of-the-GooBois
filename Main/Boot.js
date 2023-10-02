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
    this.load.image(
      "Level_1_Background",
      "Level/Level_1/Level_1_Background.png"
    );
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
    //this.music.play(musicConfig);
    //----Load Level----//
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.time.delayedCall(1000, () => {
      this.scene.start("Level_1");
    });
  }
}
