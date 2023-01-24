import Day from '../src/Day';
import { describe, expect, test } from '@jest/globals';

describe('Testing Day class', () => {
  test('Testing basic methods from a Day instance', () => {
    const day: Day = new Day(1992, 'March', 30);

    expect(day.getDay()).toBe(30);
    expect(day.getMonth()).toBe(3);
    expect(day.getMonthName()).toBe('March');
    expect(day.getYear()).toBe(1992);
  });

  test('Testing correct generation of the Date instance', () => {
    const dayInstance: Day = new Day(1992, 'March', 30);
    const dateInstance: Date = new Date('March 30, 1992 00:00:00');

    expect(dayInstance.getDate().toUTCString()).toBe(dateInstance.toUTCString());
  });
});
