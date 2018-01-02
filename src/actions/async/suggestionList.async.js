import {GET} from "../../web_apis/webApI.Service";
import {suggestionListing} from "../index";

export function getSuggestionList() {
    let URL = "https://api.myjson.com/bins/j866r";
    return (dispatch, getState) => GET(URL)
        .then((response)=> {
            dispatch(suggestionListing(response.data));
        })
        .catch((error)=> {
            console.log("Error While Fetching Suggetion List: ", error);
        })

}
