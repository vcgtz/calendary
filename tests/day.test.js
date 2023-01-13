const Day = require('../src/Day');

describe('Testing Day class', () => {
  it('Testing basic methods from a Day instance', () => {
    const day = new Day(1992, 'March', 30);

    expect(day.getDay()).toBe(30);
    expect(day.getMonth()).toBe(3);
    expect(day.getMonthName()).toBe('March');
    expect(day.getYear()).toBe(1992);
  });

  it('Testing correct generation of the Date instance', () => {
    const dayInstance = new Day(1992, 'March', 30);
    const dateInstance = new Date('March 30, 1992 00:00:00');

    expect(dayInstance.getDate().toUTCString()).toBe(dateInstance.toUTCString());
  });
});
