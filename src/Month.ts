import MONTHS from './constants/months';
import Day from './Day';
import { Week } from './extraTypes';

export default class Month {
  #year: number;
  #name: string;
  #shortName: string;
  #month: number;
  #days: Day[];

  /**
   * Month class
   * @param {Number} year       Year for which you want the month
   * @param {String} monthName  Full name of the month in English
   */
  constructor(year: number, monthName: string) {
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

  #build(): void {
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
  getName(): string {
    return this.#name;
  }

  /**
   * Returns the short name of the month
   * @returns {String} Short name of the month
   */
  getShortName(): string {
    return this.#shortName;
  }

  /**
   * Returns the year of the calendar
   * @returns {Number} year
   */
  getYear(): number {
    return this.#year;
  }

  /**
   * Returns a number that represents the month
   * @returns {Number} Number of the month in the year
   */
  getMonth(): number {
    return this.#month;
  }

  /**
   * Returns the number of the last day in the month
   * @returns {Number} Number of the last day
   */
  getLastDay(): number {
    return new Date(this.#year, this.#month, 0).getDate();
  }

  /**
   * Returns an array of days
   * @returns {Array.<Day>} Array of instances of Day class
   */
  getDays(): Day[] {
    return this.#days;
  }

  /**
   * Returns an bidimentional array representing weeks of a month
   * @returns {Array.<Array.<Day>>} Weeks from the current month
   */
  getWeeks(): Week[] {
    const weeks: Week[] = [];
    const generator = this.#daysGenerator();
    let currentDay = generator.next();

    while (!currentDay.done) {
      const week: Week = [];

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
  getTotalOfDays(): number {
    return this.#days.length;
  }

  print(): void {
    console.log(`${this.#name}, ${this.#year}`);

    const weeks = this.getWeeks();

    for (let i = 0; i < weeks.length; i++) {
      const printableWeek = [];

      for (let j = 0; j < weeks[i].length; j++) {
        if (weeks[i][j]) {
          printableWeek.push(`${weeks[i][j]?.getDay()}`.padStart(2, ' '));
        } else {
          printableWeek.push('  ');
        }
      }

      console.log(printableWeek.join(' '));
    }
  }

  *#daysGenerator() {
    for (let i = 0; i < this.#days.length; i++) {
      yield this.#days[i];
    }
  }
}
