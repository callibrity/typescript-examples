{
  /***** Generic functions *****/
  // sometimes we need a single function to have multiple type definitions
  // for example, maybe we want the function below to be able to echo numbers, string, or booleans, not just strings
  function echo(x: string): string {
    return x;
  }

  // we would define the function with a generic type 'T' that can later be assigned
  // this function has an input parameter 'x' of type 'T', then returns a value of type 'T'
  function echo2<T>(x: T): T {
    return x;
  }

  // then the type can be decided when the function is called
  echo2<string>('hi');
  echo2<number>(4);
  echo2<boolean>(true);

  /***** Generic interfaces *****/
  // generic types can also be used in interfaces
  interface IStuff<T>{
    thing1: T
    thing2: T
    thing3: T
  }

  let obj: IStuff<number> = {
    thing1: 1,
    thing2: 2,
    thing3: 3
  }

  let obj2: IStuff<string[]> = {
    thing1: ['a', 'b', 'c'],
    thing2: ['d', 'e', 'f'],
    thing3: ['h', 'i', 'j']
  }
}





