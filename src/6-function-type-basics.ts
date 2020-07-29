{
/***** Function type basics *****/
// input parameter types are defined next to the input parameters
// return value type is defined after the input parameters

//  this function takes two numbers as arguments, and returns a number
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

sum('me', 'you'); // 🚨 arguments are supposed to be numbers

/***** Arrow functions *****/
// arrow functions use the same syntax
const sum2 = (x: number, y: number): number => {
  return x + y;
}

/***** Use interfaces for readability *****/
// when types get complex, it's maybe we should use interfaces to make functions more readable

// correct type definitions, but messy and hard to read
function orderCost({customer: {firstName, lastName, id}, purchases}
  : {customer: {firstName: string; lastName: string; id: number}; purchases: {item: string; count: number}[]})
  : {message: string; totalCost: number; items: string[] } {
  const cost = 1111;
  const itemsPurchased = ["skates", "hats", "tables"];
  return {
    message: `Thanks for the order ${firstName}!`,
    totalCost: cost,
    items: itemsPurchased
  }
}

// maybe a better approach?
interface IOrder {
  customer: {
    firstName: string;
    lastName: string;
    id: number;
  };
  purchases: {item: string; count: number}[];
}

interface ICost {message: string; totalCost: number; items: string[] } 

function orderCost2({customer: {firstName, lastName, id}, purchases} : IOrder) : ICost {
  const cost = 1111;
  const itemsPurchased = ["skates", "hats", "tables"];
  return {
    message: `Thanks for the order ${firstName}!`,
    totalCost: cost,
    items: itemsPurchased
  }
}
}