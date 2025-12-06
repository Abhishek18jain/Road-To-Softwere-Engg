// starting
let message = "Hello, TypeScript!";
// message = 77782;
// message produces an error because it's inferred as a string
// so the correct way is to use 
message = "77782";
console.log(message);
//  today i learned about type inference in TypeScript.
// also type annotations

// type aliases

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}
let user: User = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(user);

// interface
interface Product {
    id: number;
    name: string;
    price: number;
}   
interface Book extends Product {
        averageRating?: number;}


// intersection    type
type Vehicle = {    
    make: string;
    model: string;
}
type Car = Vehicle & {

    doors: number;
}
