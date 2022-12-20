const ERROR_MESSAGE = require('../../src/Constants/ERROR');
const ExcludedMenu = require('../../src/Validator/ExcludedMenu');

describe('ExcludedMenu 테스트', () => {
  test('먹지 못하는 메뉴가 없을 때 공백도 통과 처리', () => {
    expect(() => new ExcludedMenu('')).toBeTruthy();
  });
  describe('checkNameLanguage', () => {
    test('한글을 입력하였을 때 통과 처리', () => {
      expect(() => new ExcludedMenu('우동,스시')).toBeTruthy();
    });

    test('[Error]한글외에 다른 문자를 입력하였을 때 예외 처리', () => {
      expect(() => new ExcludedMenu('ryan,meat,332')).toThrow(ERROR_MESSAGE.menu_name);
    });
  });

  describe('checkNumberOfMenus', () => {
    test('[Error] 못 먹는 메뉴가 2개를 초과하였을 때 예외 처리 ', () => {
      expect(() => new ExcludedMenu('우동,스시,월남쌈')).toThrow(ERROR_MESSAGE.menu_number);
    });
  });

  describe('checkValidMenu', () => {
    test('[Error]한글외에 다른 문자를 입력하였을 때 예외 처리', () => {
      expect(() => new ExcludedMenu('계란밥,간장밥')).toThrow(ERROR_MESSAGE.excluded_menu('계란밥'));
    });
  });
});
