"use strict";
// generics 
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("abhi"));
// forarray generic function
function wrapInArray(Items) {
    return [Items];
}
console.log(wrapInArray("10"));
console.log(wrapInArray(5));
const User = { amount: 100, message: { id: "abhi" } };
console.log(User);
// Generic Constraints (extends)\
function paymentInfo(obj) {
    return obj;
}
const payment = paymentInfo({ id: "12 ", name: "Abhi" });
console.log(payment);
function success(value) {
    return { ok: true, value };
}
function failure(error) {
    return { ok: false, error };
}
function login(username, password) {
    if (username !== "abhi") {
        return failure({ message: "User not found", code: "Not found" });
    }
    return success({ token: "abc123" });
}
const result = login("abhi1", "1245");
if (result.ok) {
    console.log("Token:", result.value.token);
}
else {
    console.log("Error:", result.error.message);
}
const user1 = { name: "Abhi" };
const user2 = { age: 5 };
console.log(user1, user2);
const user3 = { name: "Abhi", age: 15 };
console.log(user3);
const user4 = { name: "abhi" };
console.log(user4);
//# sourceMappingURL=generics.js.map