const Calendar = require('../src/Calendar');
const Month = require('../src/Month');

describe('Testing Month class', () => {
  it('Testing basic methods from a Calendar instance', () => {
    const calendar = new Calendar(2000);

    expect(calendar.getYear()).toBe(2000);
    expect(calendar.getTotalOfMonths()).toBe(12);
  });

  it('Testing days array generation', () => {
    const calendar = new Calendar(2023);
    const monthsResult = calendar.getMonths().every((month) => month instanceof Month);

    expect(monthsResult).toBe(true);
  });
});
