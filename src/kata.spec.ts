import { isLeapYear } from './kata';

/**
 * - All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
 * - All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year),
 * - All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016),
 * - All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019).
 */

describe('Kata', () => {
  test('All years divisible by 400 ARE leap years', () => {
    expect(isLeapYear(1600)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2400)).toBe(true);
  });

  test('All years divisible by 100 but not by 400 are NOT leap years', () => {
    expect(isLeapYear(1700)).toBe(false);
    expect(isLeapYear(1800)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);
  });
});
