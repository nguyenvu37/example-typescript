export {};
// type Alias

type MixDate = Date | string | number;

function isWeekend(date: MixDate): boolean {
  if (
    typeof date === 'string' ||
    typeof date === 'number'
  ) {
    date = new Date(date);
  }
  const day = date.getDay();
  return day === 6 || day === 0;
}

console.log(isWeekend(new Date()));
console.log(isWeekend('2021-12-11'));
console.log(isWeekend(new Date().getTime()));

function isLastDayOfMonth(date: MixDate) {
  return false;
}
