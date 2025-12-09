//uninon and intersection example

// create a union type
type role = "admin" | "user" | "guest";

// create an intersection'
type name = {
    name: string;
    age: number;
} 
type employee = {
    employeeId: number;
}
type employeeDetails = name & employee;

//order uninon type

type orderDetails = |{status : " success" , orderId : string} |{status : "failed" , reason : string} 
//product integration 
type productBase = {id:string , title:string};
type inventory ={ stock:number , warehouse : string}
type fullProduct  = productBase & inventory;

function handleResult(res:orderDetails){
    if(!res){
        console.log("please provide value")
    }
    if(res.status===" success"){
         console.log("placed successfully")
        return "orderplaced successfully"
    }
    else{
        console.log("failed yrr")
        return "failed"

    }

}
handleResult({status:" success" , orderId : "5"});


type a = { name : string}
type b = {name : number}
type c =  a | b;
 type statusforsomething = "pending" | "done" 
 function updated(s:statusforsomething){
    if(s=== "done"){
        console.log("ok")
    }
 }
  
 type baseUser = {
    name:string , age : number
 }
 type profile = {
    bio?:string , avatar ?: string
 }
 type fullUser = baseUser & profile

 function renderProfile ( u : fullUser){
    console.log(`printing all details of user ` , u)

 }
 renderProfile({name:"abhi" , age : 20 , bio :"something" , avatar : "" })