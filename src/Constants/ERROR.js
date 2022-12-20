const ERROR_MESSAGE = {
  comma: '콤마로 올바르게 구분되지 않았거나 코치 인원이 유효하지 않습니다(2~5명).',
  name_length: '코치 이름은 최소 2글자 ~ 최대 4글자까지 가능합니다.',
  name_language: '코치 이름은 한글로만 작성하실 수 있습니다.',
  menu_name: '메뉴 이름은 한글로만 작성하실 수 있습니다.',
  excluded_menu: (menu) =>
    `${menu}은(는) 추천메뉴에 포함되어있지 않습니다. \n${menu}을(를)제외하고 작성해 주세요\n못 먹는 메뉴가 없다면 바로 엔터를 눌러주세요`,
  menu_number: '못 먹는 메뉴는 2개이하만 입력하실 수 있습니다. ',
};

module.exports = ERROR_MESSAGE;