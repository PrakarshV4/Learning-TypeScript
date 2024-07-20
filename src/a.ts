// let x:number = 1;
// console.log(x);

// function greet(firstName: string, lastName: string, age: number){
//     console.log("Hello" + firstName);
// }
// greet("Harkirat", "singh", 28);

// // Create a function that takes another function as input and runs it after 1 second.

// function runAter1s(fn: () => void){
//     setTimeout(fn, 1000);
// }
// runAter1s(function(){
//     console.log("hi There");
// })

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
// interface User{
//     firstName: string;
//     lastName: string;
//     age : number;
//     email?: string; //you can pass email or cannot pass email
// };

// function isLegalAge(user: User) : boolean{  //user is a object
//     if(user.age > 18) return true;
//     else return false;
// }

// isLegalAge({
//     firstName: "Harkirat",
//     lastName: "singh",
//     age : 20
// })


// // Implement interface
// interface Person{
//     name: string;
//     age: number;
//     greet(phrases: string) : void;
// }
// class Employee implements Person{
//     name: string;
//     age: number;

//     constructor(n: string, a: number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrases: string){
//         console.log(`${phrases} ${this.name}`);
//     }
// }

//Arrays in TS

function maxValue(arr: number[]): number {
    let maxi = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxi){
            maxi = arr[i];
        }
    }
    return maxi;
}

//enum 

// // const app = express();

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req,res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.NotFound).json({});
//     }
//     res.status(ResponseStatus.Success).json({});
// })