import {POST} from '../../web_apis/webApI.Service';
import {loginUser} from '../index';

export function authenicateUser(acct_obj,headers=null) {
    let URL = HOST.URL+ '/login';
    return (dispatch, getState) => POST(URL, acct_obj, headers)
        .then(response => {
            dispatch(loginUser(response.data));
            return response.data;
        })
        .catch(err => {
            console.error("Error: ",err);
        })
}

const HOST = {
  URL: 'http://localhost:3000'
};