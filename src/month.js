const MONTHS = require('./constants/months');
const Day = require('./Day');

class Month {
  name;
  #year;
  #days;
  
  constructor(year, monthName) {
    this.name = monthName;
    this.#year = year;
    this.#days = [];

    if (!MONTHS[monthName]) {
      throw new Error('Month name not valid');
    }

    Object.assign(this, MONTHS[monthName]);

    this.#build();
  }

  #build() {
    if (!this.#year) {
      throw new Error('Year is not specified');
    }

    if (!this.name) {
      throw new Error('Name of the month is not specified');
    }

    for (let i = 1; i <= this.#getLastDay(); i++) {
      this.#days.push(new Day(this.#year, this.name, i));
    }
  }

  #getLastDay() {
    return new Date(this.#year, this.index, 0).getDate();
  }

  getDays() {
    return this.#days;
  }
}

module.exports = Month;
