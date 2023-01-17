const Day = require('../src/Day');
const Month = require('../src/Month');

describe('Testing Month class', () => {
  it('Testing basic methods from a Month instance', () => {
    const month = new Month(1992, 'March');

    expect(month.getName()).toBe('March');
    expect(month.getShortName()).toBe('Mar');
    expect(month.getLastDay()).toBe(31);
    expect(month.getTotalOfDays()).toBe(31);
    expect(month.getMonth()).toBe(3);
  });

  it('Testing basic methods from a Month instance in a leap year', () => {
    const month = new Month(2020, 'February');

    expect(month.getName()).toBe('February');
    expect(month.getShortName()).toBe('Feb');
    expect(month.getLastDay()).toBe(29);
    expect(month.getTotalOfDays()).toBe(29);
    expect(month.getMonth()).toBe(2);
  });

  it('Testing days array generation', () => {
    const month = new Month(1992, 'March');
    const daysResult = month.getDays().every((day) => day instanceof Day);

    expect(daysResult).toBe(true);
  });

  it('Testing week representation of a month', () => {
    const week1 = [
      null,
      null,
      null,
      null,
      null,
      null,
      new Day(2020, 'February', 1),
    ];
    const week2 = [
      new Day(2020, 'February', 2),
      new Day(2020, 'February', 3),
      new Day(2020, 'February', 4),
      new Day(2020, 'February', 5),
      new Day(2020, 'February', 6),
      new Day(2020, 'February', 7),
      new Day(2020, 'February', 8),
    ];
    const week3 = [
      new Day(2020, 'February', 9),
      new Day(2020, 'February', 10),
      new Day(2020, 'February', 11),
      new Day(2020, 'February', 12),
      new Day(2020, 'February', 13),
      new Day(2020, 'February', 14),
      new Day(2020, 'February', 15),
    ];
    const week4 = [
      new Day(2020, 'February', 16),
      new Day(2020, 'February', 17),
      new Day(2020, 'February', 18),
      new Day(2020, 'February', 19),
      new Day(2020, 'February', 20),
      new Day(2020, 'February', 21),
      new Day(2020, 'February', 22),
    ];
    const week5 = [
      new Day(2020, 'February', 23),
      new Day(2020, 'February', 25),
      new Day(2020, 'February', 25),
      new Day(2020, 'February', 26),
      new Day(2020, 'February', 27),
      new Day(2020, 'February', 29),
      new Day(2020, 'February', 29),
    ];

    const feb2020 = [
      week1, week2, week3, week4, week5,
    ];

    const month = new Month(2020, 'February');

    expect(feb2020).toEqual(month.getWeeks());

    // week 1, Feb 1st
    expect(feb2020[0][6].getDay()).toBe(month.getWeeks()[0][6].getDay());
    // week 2, Feb 6th
    expect(feb2020[1][4].getDay()).toBe(month.getWeeks()[1][4].getDay());
    // week 3, Feb 11th
    expect(feb2020[2][2].getDay()).toBe(month.getWeeks()[2][2].getDay());
    // week 4, Feb 19th
    expect(feb2020[3][3].getDay()).toBe(month.getWeeks()[3][3].getDay());
  });
});
