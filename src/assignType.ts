export {};

const age: number = 1;

let newVar: string;

function sum(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number) => a * b;

function waitAndDo(callback: (param: string) => void) {
  setTimeout(() => {
    callback('ting ting...');
  }, 1000);
}

const cb = (param: string) => {
  console.log('param: ', param);
};

waitAndDo(cb);
