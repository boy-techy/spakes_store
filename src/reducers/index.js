import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import listReducer from './specsListingReducer';
import specsDetailReducer from "./specsDetailReducer";
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    loginReducer,
    homeReducer,
    listReducer,
    specsDetailReducer,
    form: reduxFormReducer
});

export default rootReducer;