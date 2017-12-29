import {searchConst} from '../actions/constants';

const {SEARCH_DATA} = searchConst;
const initialState = {searchData: ''}

export default function(state=initialState, action) {
    switch(action.type){
        case SEARCH_DATA:
            return {...state, searchData:action.searchData};
        default:
            return state;
    }
};
