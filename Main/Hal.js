var flipX = false;

export default class createHal extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Hal");
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.setScale(2);
    this.body.setGravityY(660);
    this.body.setCollideWorldBounds(true);
    this.keys = this.scene.input.keyboard.addKeys("W,A,S,D,SPACE");
    this.bullets = this.scene.physics.add.group({
      defaultKey: "Laser",
      maxSize: 1,
    });
  }

  //----Shoot----//
  shoot(x, y) {
    var bullet = this.bullets.get(x, y);
    if (bullet) {
      bullet.setActive(true);
      bullet.setVisible(true);
      this.scene.sound.play("LaserShot");
      if (flipX === true) {
        bullet.body.velocity.x = -600;
      } else {
        bullet.body.velocity.x = 600;
      }
    }
  }
  update() {
    //----Player Movement----//
    const { keys } = this;

    if (keys.A.isDown) {
      flipX = true;
      this.setFlipX(true);
      this.body.setVelocityX(-190);
      console.log("Left");
    } else if (keys.D.isDown) {
      flipX = false;
      this.setFlipX(false);
      this.body.setVelocityX(190);
      console.log("Right");
    } else {
      this.body.setVelocityX(0);
    }
    if (keys.W.isDown && this.body.touching.down) {
      this.body.setVelocityY(-420);
      console.log("Jump");
    }
    if (keys.SPACE.isDown) {
      this.scene.time.addEvent({
        delay: 500,
        callback: () => {
          this.shoot(this.x, this.y);
        },
      });
      console.log("Shoot");
    }

    this.bullets.children.each(
      function (b) {
        if (b.active) {
          if (b.x < 0 || b.x > 960) {
            b.setActive(false);
          }
        }
      }.bind(this)
    );
  }
}
