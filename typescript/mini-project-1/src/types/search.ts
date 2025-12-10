import type{User} from "./user.js"
import type{ order } from "./order.js"

export type searchResult  = | {type : "user" , user:User} | {type:"order", order:order}