    // 10 variables with explicit annotations:
    let userName:string = "Alice";
    let userAge:number = 30;
    let isActive:boolean = true;
    let userScore:number = 100;
    let userRole:string = "admin";
    let userEmail:string = "";
    let userBalance:number = 2500.50;
    let userCountry:string = "USA";
    let userId:number = 1;

    //without annotations:
    
    
    let userStatus = "active";
    let userPoints = 150;
    let isVerified = false;
    let userRank = "gold";
    let userMembership = "premium";
    let userLanguage = "English";
    let userNumber = 1234567890;
    let userAddress = "123 Main St";
    let userZipCode = "12345";


// task 3
function add(a: number, b: number): number {
  return a + b;
}
// task 4

let user:{
    name:string,
    age:number
}
    
let data:unknown= "10";
 data = "abhi"   + 10;
 data = true ;
console.log(data); 
//debugging


let count:number = 0;
count = count + 1;

// problem 2
function greet(name:string):string {
  return `hello + ${name}`;
}
 // add two numbers
 function sum (numA:number, numB:number):number {
    return numA + numB;
 }
    console.log("add" ,sum(5, 10));
function substract(numA:number, numB:number):number {
    return numA - numB;
 }
    console.log("substract",substract(10, 5));
    function multiply(numA:number, numB:number):number {
        return numA * numB;
     }
        console.log("multiply",multiply(5, 10));
    function divide(numA:number, numB:number):number {
        return numA / numB;
     }
        console.log("divide ", divide(10, 5));

// trying
let myUser = {name:"abhi", age:22};
console.log("abhi");