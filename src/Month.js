const MONTHS = require('./constants/months');
const Day = require('./Day');

class Month {
  #year;
  #name;
  #shortName;
  #month;
  #days;
  
  constructor(year, monthName) {
    this.#name = monthName;
    this.#year = year;
    this.#days = [];

    if (!MONTHS[monthName]) {
      throw new Error('Month name not valid');
    }

    const monthInfo = MONTHS[monthName];

    this.#shortName = monthInfo.shortForm;
    this.#month = monthInfo.index;

    this.#build();
  }

  #build() {
    if (!this.#year) {
      throw new Error('Year is not specified');
    }

    if (!this.#name) {
      throw new Error('Name of the month is not specified');
    }

    for (let i = 1; i <= this.getLastDay(); i++) {
      this.#days.push(new Day(this.#year, this.#name, i));
    }
  }

  getName() {
    return this.#name;
  }

  getShortName() {
    return this.#shortName;
  }

  getMonth() {
    return this.#month;
  }

  getLastDay() {
    return new Date(this.#year, this.#month, 0).getDate();
  }

  getDays() {
    return this.#days;
  }

  getTotalOfDays() {
    return this.#days.length;
  }
}

module.exports = Month;
