const ValidationError = require('../Error/ValidationError');
const ERROR_MESSAGE = require('../Constants/ERROR');

class CoachName {
  #splitInput;

  constructor(input) {
    this.#splitInput = input.split(',');
    this.#checkInput();
  }

  #checkInput() {
    this.#checkComma();
    this.#checkLanguage();
    this.#checkNameLength();
  }

  #checkComma() {
    if (this.#splitInput.length < 2 || this.#splitInput.length > 6) {
      throw new ValidationError(ERROR_MESSAGE.comma);
    }
  }

  // 추후 이름에 영어나 숫자를 포함하고 싶으면 여기를 수정해주면 된다.
  #checkLanguage() {
    this.#splitInput.forEach((name) => {
      if (/[^ㄱ-ㅎ|가-힣]/g.test(name)) {
        throw new ValidationError(ERROR_MESSAGE.name_language);
      }
    });
  }

  #checkNameLength() {
    this.#splitInput.forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        throw new ValidationError(ERROR_MESSAGE.name_length);
      }
    });
  }
}

module.exports = CoachName;
