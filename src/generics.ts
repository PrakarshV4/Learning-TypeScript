type Input = (number | string);
function firstEle(arr: Input[]){
    return arr[0];
}

const value = firstEle(["Prakarsh", " Verma"]);
// console.log(value.toUpperCase()); 
// above code will give error because since arr can be number or a string .toUpperCase will not run on type number and since return type of function firstEle is Input so it does not work.

// The problem in this approach is that:
// 1. User can send different type of values in inputs without any type errors.
// 2. TypeScript isnt able to infer right type of return type.

// Solution: GENERICS
// Generics enable you to create components that work with any data type while still providing compile type error safety
// - During definition we dont know the type we are calling, it can be anything. But when we are calling that function we have to define what type is being called.

function identity<T>(arg: T){
    return arg;
}
let op1 = identity<string>("Hello World");
let op2 = identity<number> (1);
console.log(op1.toLowerCase());
