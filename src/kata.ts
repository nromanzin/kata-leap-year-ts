export function isLeapYear(input: number): boolean {
  return isDivisibleBy(input, 400);
}

function isDivisibleBy(input: number, divider: number): boolean {
  return input % divider === 0;
}
