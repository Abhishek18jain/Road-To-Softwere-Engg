import type { searchResult } from "../types/search.js";

export function handleSearchResult (res:searchResult){
    if (res.type === "user"){
            return `Found user: ${res.user.name}`;
    }
    else{
        return `Found order: ${res.order.id}`;
    }
}