import {authConst,specsListingConst , suggestionListConst} from "./constants";

const {LOGIN} = authConst;
const {SPECS_LIST} = specsListingConst;
const {SUGGESTION_LIST, PRODUCT_DETAIL} = suggestionListConst;

export function loginUser(currentUser) {
    return {
        type: LOGIN,
        currentUser: currentUser
    }
}

export function specsListing(listData) {
    return {
        type: SPECS_LIST,
        listData
    }
}

export function suggestionListing(listData) {
    return {
        type: SUGGESTION_LIST,
        listData
    }
}

export function productDetailAction(productDetail) {
    return {
        type: PRODUCT_DETAIL,
        productDetail
    }
}