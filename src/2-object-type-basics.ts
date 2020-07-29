{
/***** Basic object type definitions *****/
let x: {property1: string; property2: number};

x = {property1: "hi", property2: 4}; // Type passes

x = {property1: "hi", property2: "howdy"}; // 🚨 property2 is supposed to be a string

x = {property1: "hi", property2: 4, property3: 5};  // 🚨 property3 isn't part of the type

x = {property1: "hi"}; // 🚨 property2 is missing

let y: {property1: string, property2: number, property3: boolean } = {property1: 'hi', property2: 4, property3: true}

/***** Optional properties using ? *****/
// ? after a property makes it optional
let z: {property1: string; property2?: number};

z = {property1: "hi", property2: 4}; // Type passes

z = {property1: "hi"}; // Type passes since property2 was optional

z = {property2: 4}; // 🚨 property1 is missing and wasn't optional

/***** Property separators *****/
// can use , or ; to separate properties = ; is probably easiest to read and less likely to get confused with value assignments
let a: {property1: string, property2: string, property3: string} // separated with ,
let b: {property1: string; property2: string; property3: string} // separated with ;
}

