import {searchConst} from "./constants";

const {SEARCH_DATA} = searchConst;

export function searchData(searchData) {
    return {
        type: SEARCH_DATA,
        searchData
    }
}