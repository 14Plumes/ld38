const game = {};

game.create = function () {
  const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
  logo.anchor.setTo(0.5, 0.5);
};

module.exports = game;
