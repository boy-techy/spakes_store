import {suggestionListConst} from "../actions/constants";

const {SUGGESTION_LIST, PRODUCT_DETAIL} = suggestionListConst;
const initialState = {listData: [], productDetail: {}};

export default function(state = initialState, action) {
    switch (action.type){
        case SUGGESTION_LIST:
            return {...state, listData: action.listData};
        case PRODUCT_DETAIL:
            return{...state, productDetail: action.productDetail};
        default:
            return state;

    }
}