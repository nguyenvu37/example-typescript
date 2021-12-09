// TUPLE

const tup: [string, boolean, number] = ['anhvu', false, 27];

// GENERICS

type strArray = Array<string>;
type numArray = Array<number>;

// ---------------------------------------------
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l1 = lastT([1, 2, 3, 4]);
console.log('l1', l1);
const l2 = lastT(['a', 2, false]);
console.log(`l2`, l2);

// ----------------------------------------------

const makeArrT = <T>(x: T) => [x];
const m1 = makeArrT(2);
console.log(`m1`, m1);

// ---------------------------------------------

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m2 = makeArrXY(2, 3);
const m3 = makeArrXY('a', 'b');

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m4 = makeTuple('a', 3);

// -----------------------------------------------

// GENERICS in INTERFACE

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const resource1: Resource<string> = {
  uid: 1,
  name: 'Anh Vu',
  data: 'a',
};

const resource2: Resource<object> = {
  uid: 1,
  name: 'movie',
  data: {
    name: 'Avenger',
  },
};

const resource3: Resource<string[]> = {
  uid: 1,
  name: 'developer',
  data: ['CSS', 'HTML', 'JS'],
};
