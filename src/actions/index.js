import {authConst} from "./constants";
import {specsListingConst} from './constants';

const {LOGIN} = authConst;
const {SPECS_LIST} = specsListingConst;

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