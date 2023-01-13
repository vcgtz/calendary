const MONTHS = require('./constants/months');
const Day = require('./Day');

class Month {
  #year;
  #name;
  #shortName;
  #month;
  #days;

  /**
   * Month class
   * @param {Number} year       Year for which you want the month
   * @param {String} monthName  Full name of the month in English
   */
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

  /**
   * Returns the name of the month
   * @returns {String} Name of the month
   */
  getName() {
    return this.#name;
  }

  /**
   * Returns the short name of the month
   * @returns {String} Short name of the month
   */
  getShortName() {
    return this.#shortName;
  }

  /**
   * Returns the year of the calendar
   * @returns {Number} year
   */
  getYear() {
    return this.#year;
  }

  /**
   * Returns a number that represents the month
   * @returns {Number} Number of the month in the year
   */
  getMonth() {
    return this.#month;
  }

  /**
   * Returns the number of the last day in the month
   * @returns {Number} Number of the last day
   */
  getLastDay() {
    return new Date(this.#year, this.#month, 0).getDate();
  }

  /**
   * Returns an array of days
   * @returns {Array.<Day>} Array of instances of Day class
   */
  getDays() {
    return this.#days;
  }

  /**
   * Returns the total of days in the month
   * @returns {Number} Total of days
   */
  getTotalOfDays() {
    return this.#days.length;
  }
}

module.exports = Month;
