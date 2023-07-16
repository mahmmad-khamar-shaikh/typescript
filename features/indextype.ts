export interface IAnimal {
  name: string;
  age: number;
  feed(food: string): string;
}
export class Cat implements IAnimal {
  name: string;
  age: number;
  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
  public feed(food: string): string {
    return food;
  }
}

type cateKey = keyof IAnimal;

type ageType = IAnimal['age'];
type nameType = IAnimal['name'];
type feedType = IAnimal['feed'];

function getPropertyValue<T, k extends keyof T>(obj: T, propertyName: k): T[k] {
  return obj[propertyName];
}
const _cat: IAnimal = new Cat('Amigo', 4);

const catAge = getPropertyValue(_cat, 'age')
const catName = getPropertyValue(_cat, 'name')
console.log(`Name of cat is ${catName} and she is ${catAge} year old`);

function getProperties<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((name) => obj[name]);
}

const catAgeAndName = getProperties(_cat, ['name', 'age']);
console.log(`Name of cat is ${catAgeAndName[0]} and she is ${catAgeAndName[1]} year old`);