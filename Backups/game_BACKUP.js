var config = {
  type: Phaser.AUTO,
  width: 600,
  height: 380,
  scene: { Boot, MainMenu, Level_1, Level_2, Level_3 },
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

var game = new Phaser.Game(config);
var Coin_1;
var Coin_2;
var pickup = false;
var win = false;
var Hal;
var keys;

function preload() {
  this.load.path = "../assets/";
  //----Hal----//
  this.load.image("Hal", "Player/Hal.png");
  //---=Background----//
  this.load.image("Background", "Level/Level_Tile.png");
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
} //----End of Preload{}----//

function create() {
  //----Controls----//
  keys = this.input.keyboard.addKeys("W,A,D");
  //----Background Music----//
  this.music = this.sound.add("BackgroundMusic");
  var musicConfig = {
    mute: false,
    volume: 0.05,
    rate: 1,
    loop: true,
  };
  this.music.play(musicConfig);

  //----Level----//
  this.add.image(300, 180, "Background");
  var platform = this.physics.add.staticGroup();
  var floor = this.physics.add.staticGroup();

  //let PlatformSmall_1 = platform.create(300, 300, 'PlatformSmall');
  let PlatformLong_1 = platform.create(500, 250, "PlatformLong");

  Coin_1 = this.physics.add.sprite(50, 320, "Coin").setScale(1.8);
  Coin_2 = this.physics.add.sprite(100, 320, "Coin").setScale(1.8);

  PlatformLong_1.setScale(1.5);
  //PlatformSmall_1.setScale(1.2);
  floor.create(300, 367, "Floor").refreshBody();
  //----Hal/Enemies----//
  Hal = this.physics.add.sprite(35, 320, "Hal").setScale(1.8);
  Hal.setBounce(0.2);
  Hal.setCollideWorldBounds(true);
  Hal.body.setGravityY(1300);

  let GooBoi_1 = this.physics.add.sprite(60, 400, "GooBoi").setScale(1.5);
  GooBoi_1.setBounce(0.2).setCollideWorldBounds(true).setGravityY(1300);
  let GooBoi_2 = this.physics.add.sprite(420, 225, "GooBoi").setScale(1.5);
  GooBoi_2.setBounce(0.2).setCollideWorldBounds(true).setGravityY(1300);

  //----Collision Mesh----//
  this.physics.add.collider(Hal, floor);
  this.physics.add.collider(Hal, platform);
  this.physics.add.collider(Hal, Coin_1, pickupCoin1, null, this);
  this.physics.add.collider(Hal, Coin_2, pickupCoin2, null, this);

  //----Creating Animations----//
  // var frameNames = this.textures.get('GooBoi').getFrameNames();
  // console.log(frameNames);

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

  //----Play Animation's----//
  GooBoi_1.play("idle");
  GooBoi_2.play("idle");
  Coin_1.play("coin");
  Coin_2.play("coin");
}

//----Coin Pickup----//
function pickupCoin1(Hal, Coin_1) {
  console.log("Hal picked up a coin");
  Coin_1.destroy();
}
function pickupCoin2(Hal, Coin_2) {
  console.log("Hal picked up a coin");
  Coin_2.destroy();
}

function update() {
  //----Player Movement----//
  if (keys.A.isDown) {
    Hal.setFlipX(true);
    Hal.setVelocityX(-160);
    console.log("Left");
  } else if (keys.D.isDown) {
    Hal.setFlipX(false);
    Hal.setVelocityX(160);
    console.log("Right");
  } else {
    Hal.setVelocityX(0);
  }

  if (keys.W.isDown && Hal.body.touching.down) {
    Hal.setVelocityY(-650);
    console.log("Jump");
  }
  //----Pickup Coin----//
  if (this.physics.overlap(Hal, Coin_1, pickupCoin1)) {
    this.sound.play("CollectSound");
  }
  if (this.physics.overlap(Hal, Coin_2, pickupCoin2)) {
    this.sound.play("CollectSound");
  }
}
