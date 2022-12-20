const RandomGenerator = require('./RandomGenerator');

const categorys = new Map([
  [1, '일식'],
  [2, '한식'],
  [3, '중식'],
  [4, '아시안'],
  [5, '양식'],
]);

class Catechory {
  #selectedCategory;

  #checkCategory;

  constructor() {
    this.#selectedCategory = [];
    this.#checkCategory = {
      일식: 0,
      한식: 0,
      중식: 0,
      아시안: 0,
      양식: 0,
    };
  }

  chooseCatechory() {
    if (this.#selectedCategory.length === 5) return this.#selectedCategory;
    const category = categorys.get(RandomGenerator.getRandomNumber());
    if (this.#checkCategory[category] === 2) return this.chooseCatechory();
    this.#checkCategory[category] += 1;
    this.#selectedCategory.push(category);
    return this.chooseCatechory();
  }
}

module.exports = Catechory;
