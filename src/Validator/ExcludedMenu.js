const ValidationError = require('../Error/ValidationError');
const ERROR_MESSAGE = require('../Constants/ERROR');
const MENU = require('../Constants/MENU');

class ExcludedMenu {
  #splitInput;

  constructor(input) {
    this.#splitInput = input.split(',');
    this.#checkInput();
  }

  #checkInput() {
    if (this.#splitInput[0] !== '') {
      this.#checkLanguage();
      this.#checkNumberOfMenus();
      this.#checkValidMenu();
    }
  }

  #checkLanguage() {
    this.#splitInput.forEach((name) => {
      if (/[^ㄱ-ㅎ|가-힣]/g.test(name)) {
        throw new ValidationError(ERROR_MESSAGE.menu_name);
      }
    });
  }

  #checkNumberOfMenus() {
    if (this.#splitInput.length > 2) {
      throw new ValidationError(ERROR_MESSAGE.menu_number);
    }
  }

  #checkValidMenu() {
    this.#splitInput.forEach((excludedMenu) => {
      if (!MENU.includes(excludedMenu)) {
        throw new ValidationError(ERROR_MESSAGE.excluded_menu(excludedMenu));
      }
    });
  }
}

module.exports = ExcludedMenu;
