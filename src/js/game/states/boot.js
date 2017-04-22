const Stats = require('../../lib/stats.min');
const properties = require('../properties');
const boot = {};

boot.create = function () {
  if (properties.showStats) {
    addStats(this.game);
  }

  this.game.sound.mute = properties.mute;

  this.game.state.start('preloader');
};

function addStats(game) {
  const stats = new Stats();

  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.right = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);

  // Monkey patch Phaser's update in order to correctly monitor FPS.
  const oldUpdate = game.update;
  game.update = function () {
    stats.begin();
    oldUpdate.apply(game, arguments);
    stats.end();
  };
}

module.exports = boot;
