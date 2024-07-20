let x: number = 1;
console.log(x);

function greet(firstName: string, lastName: string, age: number){
    console.log("Hello" + firstName);
}
greet("Harkirat", "singh", 28);

// Create a function that takes another function as input and runs it after 1 second.

function runAter1s(fn: () => void){
    setTimeout(fn, 1000);
}
runAter1s(function(){
    console.log("hi There");
})