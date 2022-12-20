const InputView = require('./InputView');
const OutputView = require('./OutputView');

const NL = '\n';
const INPUT_MESSAGE = Object.freeze({
  coach_name: '코치의 이름을 입력해 주세요. (, 로 구분)',
  exclud: (coachName) => `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요`,
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
});

const View = {
  readCoachName(callback) {
    InputView.readLine(INPUT_MESSAGE.coach_name + NL, callback);
  },

  readExcludedMenu(callback, coachName) {
    InputView.readLine(INPUT_MESSAGE.exclud(coachName) + NL, callback);
  },

  printError(error) {
    OutputView.printError(error);
  },

  printStart() {
    OutputView.print(OUTPUT_MESSAGE.start);
  },

  printResult(value) {
    OutputView.printResult(value);
  },
};

module.exports = View;
