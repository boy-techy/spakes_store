import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import listReducer from './specsListingReducer';
import suggestionListingReducer from "./suggestionListingReducer";

const rootReducer = combineReducers({
    loginReducer,
    homeReducer,
    listReducer,
    suggestionListingReducer
});

export default rootReducer;