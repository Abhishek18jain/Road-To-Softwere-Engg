// revising week 1
// //basic ts operation for this function
// function add(a, b) {
//   return a + b;
// }

import type order = require("./mini-project-1/dist/types/order");

function add(a:number, b:number) :number {
  return a + b;
}
console.log( add(5 , 10));

// Type Annotations + Inference + any/unknown
// convert this dirty JS to strict TS
// Fix this:
let value:string | boolean | number;
value = 10;
value = "hello";
value = true;

function process(v:string | boolean | number) {
    if(typeof v === "string"){
        console.log(v.toUpperCase());
  return v.toUpperCase();
    }
    else if(typeof v === "number"){
           console.log(v.toExponential());
    }
    else{
        console.log("v" , v)
        return v;
    }
}
process("Hello");
process(2);
process(true)
// type interface
let city:string|number = "Indore";
city = 10; // TS should scream

// Create interface BaseUser { id, name }
interface baseUser {
    id:string,
    name:string
}
// Create type AdminUser = BaseUser & { role: "admin" }
 type AdminUser = baseUser & {
    role:"admin"
 }

//  Task 5: Create an interface that extends
interface User {
    name : string,
    age:number
}
interface Job extends User {
    salary : number
}

// Task 6: Build two versions of OrderStatus

// Literal type version

// Enum version

// first - literal version

type OrderStatus  = "pending" | "done" | "shipped" ;
function update(status: OrderStatus){
    if(status === "pending"){
        console.log("order is pending")
    }
    else if (status === "done"){
        console.log("order is done")

    }
    console.log("status" , status);


}
// update("pending")
// update("shipped")
// now enum version

enum Status {
    pending = "order is pending",
    shipped = "order is shipped",
    completed  = "order is completed"
}
function updateStatus(status: Status) {
       if(status === Status.pending){
        console.log("order is pending")
    }
    else if (status === Status.completed){
        console.log("order is Compeleted")

    }
    console.log("status" , status);

}
// updateStatus(Status.completed)
// updateStatus(Status.pending)
updateStatus(Status.shipped)
console.log(Status);

function print(value: string | number) {
    
  // if string → uppercase
  if(typeof value === "string"){
    value.toUpperCase
    console.log("value" , value)

  }
  // if number → toFixed
else{
    console.log("value" , value)
}
}
print(10)

