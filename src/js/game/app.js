const _ = require('lodash');
const properties = require('./properties');

const states = {
  boot: require('./states/boot.js'),
  preloader: require('./states/preloader.js'),
  game: require('./states/game.js'),
};

const game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

// Automatically register each state.
_.each(states, (state, key) => {
  game.state.add(key, state);
});

game.state.start('boot');
