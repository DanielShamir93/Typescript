// primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];

// classes
let now: Date = new Date();
class Car {};
let car: Car = new Car();

// objects
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

console.log(logNumber(10))