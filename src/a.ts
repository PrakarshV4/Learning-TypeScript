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

//Create a function that return true if user is above legal age

//this violates DRY principle
// function isLegalAge(user: {
//     firstName: string;
//     lastName: string;
//     age : number;
// }){  //user is a object
//     if(user.age > 18) return true;
//     else return false;
// }

//so we use interfaces
interface User{
    firstName: string;
    lastName: string;
    age : number;
    email?: string; //you can pass email or cannot pass email
};

function isLegalAge(user: User) : boolean{  //user is a object
    if(user.age > 18) return true;
    else return false;
}

isLegalAge({
    firstName: "Harkirat",
    lastName: "singh",
    age : 20
})
