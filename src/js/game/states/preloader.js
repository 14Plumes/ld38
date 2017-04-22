const preloader = {};

preloader.preload = function preload() {
    this.game.load.image('logo', 'images/phaser.png');
};

preloader.create = function create() {
    this.game.state.start('game');
};

module.exports = preloader;
