const CoachName = require('../../src/Validator/CoachName');
const ERROR_MESSAGE = require('../../src/Constants/ERROR');

describe('CoachName 테스트', () => {
  describe('checkComma 테스트', () => {
    test('올바른 값을 입력하였을 때', () => {
      expect(() => new CoachName('토미,제임스,포코')).toBeTruthy();
    });

    test('[Error] 콤마로 구분하지 않았을 때 예외 처리', () => {
      expect(() => new CoachName('토미제임스포코')).toThrow(ERROR_MESSAGE.comma);
    });
  });

  describe('checkNameLanguage', () => {
    test('한글을 입력하였을 때 통과 처리', () => {
      expect(() => new CoachName('토미,제임스,포코')).toBeTruthy();
    });

    test('[Error]한글외에 다른 문자를 입력하였을 때 예외 처리', () => {
      expect(() => new CoachName('Tom,334,포코')).toThrow(ERROR_MESSAGE.name_language);
    });
  });

  describe('checkNameLength', () => {
    test('코치 이름이 2~4글자 사이일때 통과 처리', () => {
      expect(() => new CoachName('토미,제임스,포코')).toBeTruthy();
    });

    test('[Error] 코치 이름이 2~4글자가 아닐 때 예외 처리 ', () => {
      expect(() => new CoachName('토마스기차,제임스카멜론,포')).toThrow(ERROR_MESSAGE.name_length);
    });
  });
});
