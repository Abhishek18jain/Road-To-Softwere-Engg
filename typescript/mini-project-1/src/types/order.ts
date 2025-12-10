import type{User} from "./user.js"
export type orderStatus = "pending " | "shipped" | " delivered";
export type order = {
user : User;    
id : string;
amount : number;
status : orderStatus
}