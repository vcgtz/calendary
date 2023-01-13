class Day {
  #year;
  #month;
  #day;
  #date;

  constructor(year, monthName, day) {
    this.#year = year;
    this.#month = monthName;
    this.#day = day;
    
    this.#date = new Date(`${this.#month} ${this.#day}, ${this.#year} 00:00:00`);
  }

  getYear() {
    return this.#year;
  }

  getMonthName() {
    return this.#month;
  }

  getMonth() {
    return this.#date.getMonth() + 1;
  }

  getDay() {
    return this.#day;
  }

  getDate() {
    return this.#date;
  }
};

module.exports = Day;
