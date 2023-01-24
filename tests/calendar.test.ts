import Month from '../src/Month';
import Calendar from '../src/Calendar';
import { describe, expect, test } from '@jest/globals';

describe('Testing Month class', () => {
  test('Testing basic methods from a Calendar instance', () => {
    const calendar: Calendar = new Calendar(2000);

    expect(calendar.getYear()).toBe(2000);
    expect(calendar.getTotalOfMonths()).toBe(12);
  });

  test('Testing days array generation', () => {
    const calendar: Calendar = new Calendar(2023);
    const monthsResult: boolean = calendar.getMonths().every((month) => month instanceof Month);

    expect(monthsResult).toBe(true);
  });
});
