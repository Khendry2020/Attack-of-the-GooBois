class PlayerPlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
    this.player = null;
  }

  createPlayer(x, y, texture) {
    this.player = new Hal(this.scene, x, y, texture);
    return this.player;
  }

  getPlayer() {
    return this.player;
  }

  update() {
    if (this.player) {
      //----Player Movement----//
      var keys = this.scene.input.keyboard.createCursorKeys();

      if (keys.left.isDown) {
        this.player.setFlipX(true);
        this.player.setVelocityX(-160);
        console.log("Left");
      } else if (keys.right.isDown) {
        this.player.setFlipX(false);
        this.player.setVelocityX(160);
        console.log("Right");
      } else {
        this.player.setVelocityX(0);
      }

      if (keys.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-650);
        console.log("Jump");
      }
    }
  }
}
