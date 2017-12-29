import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import listReducer from './specsListingReducer';

const rootReducer = combineReducers({
    loginReducer,
    homeReducer,
    listReducer
});

export default rootReducer;