const Catechory = require('../Catechory');
const { Random } = require('@woowacourse/mission-utils');
const { catechoryInMenu } = require('../Constants/MENU');

class Menu {
  #CoachName;

  #excludedMenu;

  #catechory;

  #recommendedMenu;

  constructor() {
    const catechory = new Catechory();
    this.#catechory = catechory.chooseCatechory();
    this.#excludedMenu = {};
    this.#recommendedMenu = {};
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

  recommend() {
    this.#CoachName.forEach((coach) => {
      this.#forEachCatechory(coach);
    });
    const catechory = this.#catechory;
    const recommendMenu = this.#recommendedMenu;
    return { catechory, recommendMenu };
  }

  #forEachCatechory(coach) {
    this.#catechory.forEach((cate) => {
      this.#recommendMenu(coach, cate);
    });
  }

  #recommendMenu(coach, cate) {
    const index = Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    const menu = catechoryInMenu[cate][index - 1];
    if (this.#excludedMenu[coach] === menu) return this.#recommendMenu(coach, cate);
    this.#recommendedMenu[coach] = this.#recommendedMenu[coach]
      ? [...this.#recommendedMenu[coach], menu]
      : [menu];
  }
}

module.exports = Menu;
