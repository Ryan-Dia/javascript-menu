const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = {
  error: (message, name, cause) => `${name} : ${message}\n[CAUSE] : ${cause}`,
  result: '메뉴 추천 결과입니다.\n',
  catechory: (catechory) => {
    return `[ 카테고리 | ${catechory[0]} | ${catechory[1]} | ${catechory[2]} | ${catechory[3]} | ${catechory[4]} ]`;
  },
  recommend: (name, recommendMenu) => {
    return `[ ${name} | ${recommendMenu[name][0]} | ${recommendMenu[name][1]} | ${recommendMenu[name][2]} | ${recommendMenu[name][3]} | ${recommendMenu[name][4]} ]`;
  },
  days: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  end: '\n추천을 완료했습니다.',
};

const OutputView = {
  print(input) {
    Console.print(input);
  },
  printError({ message, name, cause }) {
    Console.print(OUTPUT_MESSAGE.error(message, name, cause));
  },

  printResult({ catechory, recommendMenu }) {
    Console.print(OUTPUT_MESSAGE.result);
    Console.print(OUTPUT_MESSAGE.days);
    Console.print(OUTPUT_MESSAGE.catechory(catechory));
    for (let name in recommendMenu) {
      Console.print(OUTPUT_MESSAGE.recommend(name, recommendMenu));
    }
    Console.print(OUTPUT_MESSAGE.end);
    Console.close();
  },
};

module.exports = OutputView;
