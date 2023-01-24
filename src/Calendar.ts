import MONTHS from './constants/months';
import Month from './Month';
import { Week } from './extraTypes';

export default class Calendar {
  #year: number;
  #months: Month[];

  /**
   * Calendar class
   * @param {Number} year Year for which you want the calendar
   */
  constructor(year: number) {
    this.#year = year;
    this.#months = [];

    this.#build();
  }

  #build(): void {
    if (!this.#year) {
      throw new Error('Year is not specified');
    }

    const monthsNames: string[] = Object.keys(MONTHS);

    for (let i = 0; i < monthsNames.length; i++) {
      this.#months.push(new Month(this.#year, monthsNames[i]));
    }
  }

  /**
   * Returns the year of the calendar
   * @returns {Number} year
   */
  getYear(): number {
    return this.#year;
  }

  /**
   * Returns an array of months
   * @returns {Array.<Month>} Array of instances of Month class
   */
  getMonths(): Month[] {
    return this.#months;
  }

  /**
   * Returns the total of months in the calendar
   * @returns {Number} Total of months
   */
  getTotalOfMonths(): number {
    return this.#months.length;
  }

  /**
   * Returns an array representation of the calendar
   * @returns {Array} Array of months
   */
  toArray(): Week[][] {
    const months = [];

    for (let i = 0; i < this.getTotalOfMonths(); i++) {
      months.push(this.#months[i].getWeeks());
    }

    return months;
  }
}
