class Day {
  #year;
  #month;
  #day;
  #date;

  /**
   * Day class
   * @param {Number} year       Year for which you want the day
   * @param {String} monthName  Full name of the month in English
   * @param {Number} day        Number of the day
   */
  constructor(year, monthName, day) {
    this.#year = year;
    this.#month = monthName;
    this.#day = day;

    this.#date = new Date(
      `${this.#month} ${this.#day}, ${this.#year} 00:00:00`
    );
  }

  /**
   * Returns the year of the calendar
   * @returns {Number} year
   */
  getYear() {
    return this.#year;
  }

  /**
   * Returns the name of the month
   * @returns {String} Name of the month
   */
  getMonthName() {
    return this.#month;
  }

  /**
   * Returns a number that represents the month
   * @returns {Number} Number of the month in the year
   */
  getMonth() {
    return this.#date.getMonth() + 1;
  }

  /**
   * Returns the number of the current day
   * @returns {Number} Number of day
   */
  getDay() {
    return this.#day;
  }

  /**
   * Returns the day of the week as a number
   * @returns {Number} Day of the week between 0-6
   */
  getDayOfTheWeek() {
    return this.#date.getDay();
  }

  /**
   * Returns the equivalent day in a Date object
   * @returns {Date} Date object with the current date
   */
  getDate() {
    return this.#date;
  }
}

module.exports = Day;
