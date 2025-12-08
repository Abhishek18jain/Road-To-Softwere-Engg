// enums 

const enum orderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

//string enums

const enum chai {
    BlackTea = "BlackTea",
    GreenTea = "GreenTea",
    gingerTea = "gingerTea",
    masalaTea = "masalaTea",
    chocolateTea = "chocolateTea"
}

//literal types

type paymentMethod = "creditCard" | "debitCard" | "paypal" | "bankTransfer";

// Feature	Enum	Literal Types
// Runtime presence	Yes	No
// Faster?	Slightly slower	Fast (no runtime object)
// Best use-case	Complex systems, class-based logic	APIs, DTOs, schemas
// Flexibility	Medium	Very high
// orderStatus.RETURNED;

function validStatus(status: orderStatus):boolean{
    return status === orderStatus.DELIVERED || status === orderStatus.RETURNED || status === orderStatus.SHIPPED; 
}
console.log(validStatus(orderStatus.PENDING)); // true

// Create PaymentStatus using union literals.

type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
// Create ProductCategory enum.
const enum ProductCategory {
    ELECTRONICS,
    FASHION,
    HOME_APPLIANCES,
    BOOKS,
    TOYS

}
 enum Status {
  success,
  failed,
}

let s:Status =Status.success;

type Role = "admin" | "user";

let r: Role = "admin";

enum RoleEnum {
    admin,
    user
}
let re: RoleEnum = RoleEnum.admin;