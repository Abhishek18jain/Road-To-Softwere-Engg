//narrowing

type PaymentStatus = {
    status : string,
    code : number
}
function processPayment(payment: PaymentStatus){
    if(typeof payment.status==="string"){
        console.log(`Processing payment with status: ${payment.status}`);
    };

       return console.log("Payment successful");

}
processPayment({status:"completed", code:200});
 type roleAdmin ={
    role : "admin"
}
type user ={
    name:string
}

type admin ={
    name:string,
    role : "admin"
}
function checkAdmin(person: user | admin){
    if("role" in person){
        console.log(`${person.name} is an admin`);
    } else {
        console.log(`${person.name} is a user`);
    }
}
class Dog { bark() {
    console.log("Woof Woof");
} }

function handle(a: Dog | string) {
  if (typeof a === "string" || a instanceof String) {
    console.log(a.toUpperCase());
  }
   else {
   a.bark();
  }
}

// class Dog{
//     bark(){
//         console.log("Woof Woof");
//     }
// }
// class Cat{
//     meow(){
//         console.log("Meow Meow");
//     }   
// }
// function checkAnimal (animal: Dog | Cat){
//     if(animal instanceof Dog){
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// // doubt
// D. User-Defined Type Guards
// Discriminated union switch-case

// (THIS is real-world backend skill)

// function isUser(obj: any): obj is User {
//   return "name" in obj && "email" in obj;
// }


// Hinglish:
// Custom guards banakar tum backend mein safe parsing, validation karte ho.

// Ye DTO validation ka first step hota hai.
function logValue(v: string | number | boolean) {
    if(typeof v === "string"){
        console.log(`String value: ${v.toUpperCase()}`);
    }
    else if(typeof v === "number"){
        console.log(`Number value: ${v.toFixed(2)}`);
    }
    else{
        console.log(`Boolean value: ${v ? "True" : "False"}`);
    }
}

function show(x: string | number) {
    if(typeof x ==="string"){
  console.log(x.toUpperCase());
    } else {
  console.log(x.toFixed(2));
    }
}

// let fruitArray:[string, number, boolean] 
function checkFruit(fruitArray:[string, number, boolean]){
 if(typeof fruitArray[0] === "string"){
    console.log(fruitArray[0].toUpperCase());
 }
}