const { Random } = require('@woowacourse/mission-utils');
const RandomGenerator = {
  getRandomNumber() {
    return Random.pickNumberInRange(1, 5);
  },
};

module.exports = RandomGenerator;
