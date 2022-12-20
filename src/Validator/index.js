const CoachName = require('./CoachName');
const ExcludedMenu = require('./ExcludedMenu');

const Validator = {
  checkCoachName(input) {
    new CoachName(input);
  },

  checkExcludedMenu(input) {
    new ExcludedMenu(input);
  },
};

module.exports = Validator;
