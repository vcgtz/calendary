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
   * Returns an bidimentional array representing weeks of a month
   * @returns {Array.<Array.<Day>>} Weeks from the current month
   */
  getWeeks() {
    const weeks = [];
    const generator = this.#daysGenerator();
    let currentDay = generator.next();

    while (!currentDay.done) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        if (currentDay.done || i < currentDay.value.getDayOfTheWeek()) {
          week.push(null);
        } else {
          week.push(currentDay.value);
          currentDay = generator.next();
        }
      }

      weeks.push(week);
    }

    return weeks;
  }

  /**
   * Returns the total of days in the month
   * @returns {Number} Total of days
   */
  getTotalOfDays() {
    return this.#days.length;
  }

  print() {
    console.log(`${this.#name}, ${this.#year}`);

    const weeks = this.getWeeks();
    
    for (let i = 0; i < weeks.length; i++) {
      const printableWeek = [];

      for (let j = 0; j < weeks[i].length; j++) {
        if (weeks[i][j]) {
          printableWeek.push(`${weeks[i][j].getDay()}`.padStart(2, ' '));
        } else {
          printableWeek.push('  ');
        }
      }

      console.log(printableWeek.join(' '));
    }
  }

  * #daysGenerator() {
    for (let i = 0; i < this.#days.length; i++) {
      yield this.#days[i];
    }
  }
}

module.exports = Month;
