const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Menu = require('../Model/Menu');
const View = require('../View/index');
const Validator = require('../Validator');

const COACH_NAME = 'CoachName';
const CHECK_COACH_NAME = 'checkCoachName';
class MenuController {
  #model;

  #view;

  #validator;

  constructor() {
    this.#view = View;
    this.#model = new Menu();
    this.#validator = Validator;
  }

  start() {
    this.#view.printStart();
    this.#inputCoachName();
  }

  #inputCoachName() {
    this.#view.readCoachName(this.#readCoachName.bind(this));
  }

  #readCoachName(name) {
    if (this.#hasErrorOccurredByCheck(name, CHECK_COACH_NAME)) return this.#retry(COACH_NAME);
    this.#model.saveCoachName(name);
  }

  #hasErrorOccurredByCheck(input, checkName) {
    try {
      this.#validator[checkName](input);
    } catch (error) {
      return this.#handleError(error);
    }
  }

  #handleError(error) {
    if (error instanceof ValidationError) {
      this.#view.printError(new ReadError('Validation Error', error));
      return true;
    }
    throw new Error('[ERROR]: 알수없는 에러');
  }

  #retry(name) {
    if (name === 'CoachName') return this.#inputCoachName();
  }
}

module.exports = MenuController;
