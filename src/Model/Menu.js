class Menu {
  #CoachName;

  #excludedMenu;

  constructor() {
    this.#excludedMenu = {};
  }

  saveCoachName(input) {
    this.#CoachName = input.split(',');
  }

  saveExcludedMenu(coachName, menu) {
    this.#excludedMenu[coachName] = menu;
  }

  getCoachName() {
    return this.#CoachName;
  }
}

module.exports = Menu;
