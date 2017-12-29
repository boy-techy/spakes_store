import {authConst} from "./constants";

const {LOGIN} = authConst;

export function loginUser(currentUser) {
    return {
        type: LOGIN,
        currentUser: currentUser
    }
}