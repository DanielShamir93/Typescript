import { User } from './User';
import { Company } from './Company';
import { MyMap } from './MyMap';

const user = new User();
const company = new Company();
const myMap = new MyMap('map');

myMap.addMarker(user);
myMap.addMarker(company);