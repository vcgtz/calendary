const MONTHS = require('./constants/months');
const Month = require('./Month');

class Calendar {
  #year;
  #months;

  /**
   * Calendar class
   * @param {Number} year Year for which you want the calendar
   */
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

  /**
   * Returns the year of the calendar
   * @returns {Number} year
   */
  getYear() {
    return this.#year;
  }

  /**
   * Returns an array of months
   * @returns {Array.<Month>} Array of instances of Month class
   */
  getMonths() {
    return this.#months;
  }

  /**
   * Returns the total of months in the calendar
   * @returns {Number} Total of months
   */
  getTotalOfMonths() {
    return this.#months.length;
  }

  /**
   * Returns an array representation of the calendar
   * @returns {Array} Array of months
   */
  toArray() {
    const months = [];

    for (let i = 0; i < this.getTotalOfMonths(); i++) {
      months.push(this.#months[i].getWeeks());
    }

    return months;
  }
}

module.exports = Calendar;
