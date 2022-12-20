class Menu {
  #CoachName;

  constructor() {}

  saveCoachName(input) {
    this.#CoachName = input.split(',');
  }
}

module.exports = Menu;
