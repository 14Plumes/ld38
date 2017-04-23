const game = {};

game.create = function create() {
    // Planet
    const planet = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'planet');
    planet.anchor.setTo(0.5, 0.5);
    // Ship
    const ship = this.game.add.sprite(this.game.world.centerX, planet.top, 'ship');
    ship.anchor.setTo(0.5, 1);
};

module.exports = game;
