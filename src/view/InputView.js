const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readCoachName(callback) {
    this.getUserInput(
      "코치의 이름을 입력해 주세요. (, 로 구분)\n",
      callback,
      this.readCoachName.bind(this)
    );
  },

  readUnLikeMenu(name) {
    this.getUserInput(
      `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      callback,
      this.readUnLikeMenu.bind(this)
    );
  },

  getUserInput(guide, callback, redirect) {
    Console.readLine(guide, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error);
        redirect(callback);
      }
    });
  },
};

module.exports = InputView;