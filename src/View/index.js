const InputView = require('./InputView');
const OutputView = require('./OutputView');
const INPUT_MESSAGE = {};
const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
});

const View = {
  printStart() {
    OutputView.print(OUTPUT_MESSAGE.start);
  },
};

module.exports = View;
