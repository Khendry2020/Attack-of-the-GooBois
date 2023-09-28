var config = {
  type: Phaser.AUTO,
  width: 600,
  height: 380,
  scene: ["Boot", "MainMenu", "Level_1", "Level_2", "Level_3"],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

new Phaser.Game(config);
