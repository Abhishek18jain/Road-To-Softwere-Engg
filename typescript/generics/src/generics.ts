// generics 

function identity<T>(value:T):T{
    return value;
}
console.log( identity(10))
console.log(identity("abhi"))

// forarray generic function

function wrapInArray <T> (Items:T):T[]{
    return [Items]
}
console.log( wrapInArray("10"))
console.log( wrapInArray(5))

// Generic Interfaces / Types

interface payment<T> {
    amount : number,
    message : T,
}
const User:payment<{id:string}> = {amount : 100 ,  message : {id :"abhi"}} 
console.log(User)
// Generic Constraints (extends)\

function paymentInfo<T extends {id : string}>(obj : T) : T{
    return obj
}

const payment = paymentInfo({id: "12 " , name : "Abhi" })
console.log(payment)

// // CONSTRAINING MULTIPLE TYPE PARAMETERS

// function MULTIPLE <T,K extends keyof T >(obj : T, Key : K):T[K] {
//     return obj[Key]

// }
// const Multiple = MULTIPLE({name:"Abhi" , Age : 12},"name")
// console.log(Multiple)
// // 
// const user = {
//     name:"abhi", 
//     age:12
// }
// function getValue(obj: typeof user, Key : keyof typeof user){
//     return obj[Key]
// }

// const value = getValue(user, "name")
// console.log(value)


// BUILDING THE RESULT<TSuccess, TError> TYPE (PDF TASK)

 type Result<TSuccess , TError = Error > = 
    |{ok : true , value : TSuccess} 
    |{ok : false , error :TError}


    function success<T> (value:T):Result<T, never>{
        return{ok:true , value}
    }
    function failure<E>(error:E):Result<never, E>{
          return { ok: false, error };
    }

    type LoginError = {message : string , code : "invalid " |"Not found"}

    function login (username:string , password : string):Result<{token : string}, LoginError>{
          if (username !== "abhi") {
    return failure({ message: "User not found", code: "Not found"  });
  }

  return success({ token: "abc123" });

    }
    const result = login("abhi1" , "1245");
    if (result.ok) {
  console.log("Token:", result.value.token);
} else {
  console.log("Error:", result.error.message);
}

// utility types

// partial type makes property optional

type userPartial = {
    name:string,
    age:number
}
type applyPartial = Partial<userPartial>;

const user1 :applyPartial = {name:"Abhi"}
const user2 :applyPartial = {age:5}
console.log(user1 , user2)
// Required<T> makes all optional fields mandatory.
type applyReq = Required<userPartial>

const user3 :applyReq = {name :"Abhi" , age:15} 
console.log(user3)

// Pick only the fields you want.

type applyPick = Pick <userPartial , "name" >;

const user4 :applyPick = {name:"abhi"}

console.log(user4)

