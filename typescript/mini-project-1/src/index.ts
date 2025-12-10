import type { User } from "./types/user.js";
import type { order } from "./types/order.js";
import {handleSearchResult} from "./utlis/narrow.js"

const user:User = {
      id: "u1",
  name: "Abhi",
  email: "abhi@example.com",
}
const order :order ={
      id: "o1",
  user,
  amount: 4999,
  status: "pending ",

}
console.log(handleSearchResult({ type: "user", user }));
console.log(handleSearchResult({ type: "order", order }));