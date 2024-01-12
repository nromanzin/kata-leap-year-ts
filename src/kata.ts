export function isLeapYear(input: number): boolean {
  if (isDivisibleBy(input, 400)) {
    return true;
  }
  if (isDivisibleBy(input, 100)) {
    return false;
  }
  return false;
}

function isDivisibleBy(input: number, divider: number): boolean {
  return input % divider === 0;
}
