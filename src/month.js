const MONTHS = require('./constants/months');

class Month {
  name;
  
  constructor(name) {
    this.name = name;

    if (!MONTHS[name]) {
      throw new Error('Month name not valid');
    }

    Object.assign(this, MONTHS[name]);
  }
}

module.exports = Month;
