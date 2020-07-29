
/***** Type alias *****/
type str = string; // can store types as aliases

type stringOrNumber = string | number;

let var1: str;

let var2: stringOrNumber;

export type complexType = string[] | number | boolean[]; // type aliases can be exported and used elsewhere

/***** Interfaces *****/
// when type you want to alias is an object, you should create an interface instead of an alias
// interfaces work the same as aliases, except the definition syntax doesn't include an '=' and they have some extra features you'll probably never use
interface ICustomer {firstName: string; lastName: string; ID: number };

let Tom: ICustomer = {firstName: "Tom", lastName: "Mot", ID: 100};

export interface shirt {size: string; color: string}; // interfaces can also be exported and used elsewhere