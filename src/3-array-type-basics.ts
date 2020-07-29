{
/***** Basic array type definitions *****/
// to declare a type as an array, use [] after the type
let x: number[] = [1, 2, 3]; // array of numbers

x.push(4);

x.push('hi') // 🚨 can't push string to an array of numbers

let z: (string | number)[] = [1, "hi", 2]; // array of numbers and strings

z.push(1);
z.push('howdy');
z.push(true); // 🚨 array of numbers and strings, not booleans

/***** Arrays of objects *****/
let y: {property1: number; property2: string}[] = [
  {property1: 1, property2: 'hi' },
  {property1: 2, property2: 'hello'},
  {property1: 3, property2: 'howdy'}
]

y.push({property1: 4, property2: 'yo'}); // push works since type is the same

y.push({property1: 5, property2: 5}); // 🚨 doesn't match original definition

/***** Arrays of complex objects *****/
// below is an object with unlimited properties, each which is an object of the type {property1: number; property2: string}
let a: { [propertyName: string]: {property1: number; property2: string} }  

a = {
  aa: {property1: 1, property2: 'hi'},
  bb: {property1: 2, property2: 'hello'}
}

a.cc = {property1: 3, property2: 'howdy'};

a.dd = {property1: 4, property2: 4}; // 🚨 doesn't match original definition since property2 is a number

let order: {
  customer: {
    firstName: string;
    lastName: string;
    id: number;
    address: {
      street: string
      town: string
      zip: string
    }
  };
  purchases: {item: string; count: number}[];
  totalCost: number
}

}

