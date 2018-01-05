import {GET} from '../../web_apis/webApI.Service';
import {specsListing} from "../index";

export function specsListingAsync() {
    let URL = "https://api.myjson.com/bins/kou0r";
    return (dispatch,getState) => GET(URL)
        .then((response)=>{
            dispatch(specsListing(response.data));
            return response.data;
        })
        .catch((error)=>{
            return error;
        })
}