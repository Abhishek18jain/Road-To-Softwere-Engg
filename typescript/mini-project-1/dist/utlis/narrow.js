export function handleSearchResult(res) {
    if (res.type === "user") {
        return `Found user: ${res.user.name}`;
    }
    else {
        return `Found order: ${res.order.id}`;
    }
}
//# sourceMappingURL=narrow.js.map