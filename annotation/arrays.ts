const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

const importantDates: (Date | string)[] = [];