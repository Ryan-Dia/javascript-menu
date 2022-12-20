const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Menu = require('../Model/Menu');
const View = require('../View/index');
const Validator = require('../Validator');

const COACH_NAME = 'CoachName';
const EXCLUDED_MENU = 'ExcludedMenu';
const CHECK_COACH_NAME = 'checkCoachName';
const CHECK_EXCLUDED_MENU = 'checkExcludedMenu';
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
    this.#forEachCoach(this.#model.getCoachName());
  }

  #forEachCoach(nameArray) {
    if (!nameArray.length) return this.#result();
    const copyArray = [...nameArray];
    const coachName = copyArray.shift();
    this.#inputExcludedMenu(coachName, copyArray);
  }

  #inputExcludedMenu(coachName, nameArray) {
    return this.#view.readExcludedMenu(this.#readExcludedMenu.bind(this, nameArray, coachName), coachName);
  }

  #readExcludedMenu(nameArray, coachName, menu) {
    if (this.#hasErrorOccurredByCheck(menu, CHECK_EXCLUDED_MENU)) return this.#retry(EXCLUDED_MENU);
    this.#model.saveExcludedMenu(coachName, menu);
    return this.#forEachCoach(nameArray);
  }

  #result() {
    this.#view.printResult(this.#model.recommend());
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
    if (name === COACH_NAME) return this.#inputCoachName();
    if (name === EXCLUDED_MENU) return this.#forEachCoach(this.#model.getCoachName());
  }
}

module.exports = MenuController;
