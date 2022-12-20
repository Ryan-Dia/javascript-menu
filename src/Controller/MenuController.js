const View = require('../View/index');

class MenuController {
  #view;

  constructor() {
    this.#view = View;
  }

  start() {
    this.#view.printStart();
  }
}

module.exports = MenuController;
