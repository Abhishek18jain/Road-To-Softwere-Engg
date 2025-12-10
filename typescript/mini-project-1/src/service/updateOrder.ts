import type{order,orderStatus} from "../types/order.js"

export function updateOrder(order : order , status:orderStatus):order{

return {
    ...order, status
}
}