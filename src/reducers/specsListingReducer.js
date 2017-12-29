import {specsListingConst} from "../actions/constants";

const {SPECS_LIST} = specsListingConst;

const initialState = {listData: []};

export default function (state=initialState, action) {
    switch (action.type){
        case SPECS_LIST:
            return {...state, listData: action.listData};
        default:
            return state;
    }
}