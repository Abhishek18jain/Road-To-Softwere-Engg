//setup
//npm init-y
//npm install --save-dev tsx typescript
//npx tsx index.ts to run file
//"scripts": {
//   "dev": "tsx src/index.ts"
// }

function greetMyName(name: string): string {
    return `hello ${name}`;
}
console.log(greetMyName("Abhi Bhaiya"));
// 10 practice question
// function add(a, b) {
//   return a + b;
// }

// console.log(add("5", 10));
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

//problem 2
//  const user = { name: "Abhi" };
// console.log(user.age.toFixed(2));

type User = {
    name: string;
    age: number;
};
const user: User = { name: "Abhi", age: 22 };
console.log(user.age.toFixed(2));
//problem 3

// {function getDiscount(price) {
//   if (price > 100) return "20%";
//   return 10;
// }
function getDiscount(price: number): string | number {
    if (price > 100) return "20%";
    return 10;
}
//problem 4
// function printCity(user) {
//   console.log(user.address.city);
// }

// printCity({ name: "Abhi" });
type User1 = {
    user: string;
    address?: {
        city?: string;
    };
};
function printCity(user: User1): void {
    console.log(user.address?.city ?? "unkonown city");
}

printCity({ user: "Abhi" });

// problem 5
// const scores = [10, 20, "30", 40];
// const total = scores.reduce((a, b) => a + b);

const scores :(string|number)[] = [10,20, "30" ,40];
const total = scores.reduce<number>(
    (a, b) => a + Number(b),
    0
)
// // problem 6 
// function handleResp(resp) {
//   console.log(resp.username.toUpperCase());
// }

// handleResp({ user: "abhi" });
type Resp ={
    username: string;
}
function handleResp(resp:Resp) : void {
  console.log(resp.username.toUpperCase());
}

handleResp({ username: "abhi" });

// problem 7
// function getLength(str) {
//   return str.length;
// }

// console.log(getLength(null));
type Str = string | null;
function getLength(str:Str):number {
    if(str === null){
        return 0;
    }
  return str.length;
}

// console.log(getLength(null));
// // problem 8
// function calcScore(a, b) {
//   return a + b;
// }

// console.log(calcScore(true, 5));

function calcScore(a:number | boolean , b:number | boolean):number {
    const numA = Number(a);
    const numB = Number(b);

  return numA + numB;
}

console.log(calcScore(true, 5));

// problem 9
type User2 = {
    name: string;
    age: string;
    isAdmin: string;}
function createUser(name:string , age:string): User2 {
  return {
    name: name,
    age: "22",
    isAdmin: "no"
  };
}

// problem 10
// function divide(a, b) {
//   return a / b;
// }

// console.log(divide(10, 0));
// error handling
function divide(a:number, b:number) {
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }
  return a / b;
}
try {
    console.log(divide(10, 0));
    
} catch (err:any) {
  console.error("Error:", err.message);
}

