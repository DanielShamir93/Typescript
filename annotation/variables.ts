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
};

// when to use annotations

// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable on one line and initial it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  foundWord = true;
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}