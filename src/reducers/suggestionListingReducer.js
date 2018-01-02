import {suggestionListConst} from "../actions/constants";

const {SUGGESTION_LIST} = suggestionListConst;
const initialState = {listData: []};

export default function(state = initialState, action) {
    switch (action.type){
        case SUGGESTION_LIST:
            return {...state, listData: action.listData};
        default:
            return state;

    }
}