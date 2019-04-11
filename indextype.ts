export interface cat {
  name: string;
  age: number;
  feed(food: string): string;
}

type cateKey = keyof cat;

type ageType = cat['age'];
type nameType = cat['name'];
type feedType = cat['feed'];

function getPropertyValue<T, k extends keyof T>(obj: T, propertyName: k): T[k] {
  return obj[propertyName];
}
const _cat: cat = null;
const cateAge = getPropertyValue(_cat, 'age')

function getProperties<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((name) => obj[name]);
}

const getCateAgeAndName = getProperties(_cat,['name','age']);