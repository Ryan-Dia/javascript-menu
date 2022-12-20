const CoachName = require('./CoachName');

const Validator = {
  checkCoachName(input) {
    new CoachName(input);
  },
};

module.exports = Validator;
