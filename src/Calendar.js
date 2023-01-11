const MONTHS = require('./constants/months');
const Month = require('./Month');

class Calendar {
  #year;

  #months;

  constructor(year) {
    this.#year = year;
    this.#months = [];

    this.#build();
  }

  #build() {
    if (!this.#year) {
      throw new Error('Year is not specified');
    }

    const monthsNames = Object.keys(MONTHS);
    for (let i = 0; i < monthsNames.length; i++) {
      this.#months.push(new Month(this.#year, monthsNames[i]));
    }
  }

  getYear() {
    return this.#year;
  }

  getMonths() {
    return this.#months;
  }
}

module.exports = Calendar;
