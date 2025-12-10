import { handleSearchResult } from "./utlis/narrow.js";
const user = {
    id: "u1",
    name: "Abhi",
    email: "abhi@example.com",
};
const order = {
    id: "o1",
    user,
    amount: 4999,
    status: "pending ",
};
console.log(handleSearchResult({ type: "user", user }));
console.log(handleSearchResult({ type: "order", order }));
//# sourceMappingURL=index.js.map