interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  wow(): string;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  wow: () : string => {return 'wow'},
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.wow());
  console.log(vehicle.summary());
}

printVehicle(oldCivic);