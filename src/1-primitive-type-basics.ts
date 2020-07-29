{
/***** Basic primitive type definitions *****/
let x: string = "hi";
let y: number = 4;
let z: boolean;
const a = 4; // put cursor on 'a' to see type is '4'
const b = "howdy"; // put cursor on 'b' to see type is 'howdy'

x = 4; // 🚨 can't change type
x = "hello"
y = "hi"; // 🚨 can't change type


/***** Any and never types *****/
let c: any;
let d: never;

c = 4;
c = 'yo';
c = false; // type 'any' can be anything

d = 4; // 🚨
d = 'yo'; // 🚨
d = false; // 🚨 type 'never' can't be anything

/***** Multiple possible types *****/
let e: string | number; // the | operator allows multiple possible types

e = 4;
e = "sup";
e = true; // 🚨 type can be string or number, not boolean

}