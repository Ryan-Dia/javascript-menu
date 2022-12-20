const InputView = require('./InputView');
const OutputView = require('./OutputView');

const NL = '\n';
const INPUT_MESSAGE = {
  coach_name: '코치의 이름을 입력해 주세요. (, 로 구분)',
};
const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
});

const View = {
  readCoachName(callback) {
    InputView.readLine(INPUT_MESSAGE.coach_name + NL, callback);
  },

  printError(error) {
    OutputView.printError(error);
  },

  printStart() {
    OutputView.print(OUTPUT_MESSAGE.start);
  },
};

module.exports = View;
