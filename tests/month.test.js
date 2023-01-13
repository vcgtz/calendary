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
});
