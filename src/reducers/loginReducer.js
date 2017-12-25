import {authConst} from '../actions/constants';

const {LOGIN,LOGOUT} = authConst;
const initialState = {currentUser: {}};

export default function (state = initialState,action = {}) {
    switch (action.type){
        case LOGIN:
            return { ...state, currentUser: action.currentUser };
        case LOGOUT:
            return { ...state, currentUser: action.currentUser };
        default:
            return state;
    }
}
