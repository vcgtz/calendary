class Day {
  date;
  index;
  #year;
  #month;

  constructor(year, monthName, day) {
    this.#year = year;
    this.#month = monthName;
    this.index = day;
    this.date = new Date(`${this.#month} ${this.index}, ${this.#year} 00:00:00`);
  }
};

module.exports = Day;
