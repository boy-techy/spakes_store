import {productDetailAction} from "./index";
import {specsListingAsync} from "./async/specsListing.async";

export function getProductDetail(id) {
    return (dispatch, getState) => {
        const {listData} = getState().listReducer;
        new Promise((resolve, reject) => {
            if(!listData.length) {
                specsListingAsync()(dispatch, getState)
                    .then((list)=> resolve(list))
                    .catch((error)=> reject(new Error(error)))
            } else {
                resolve(listData)
            }
        }).then((listData) => {
            const productDetail = filterProduct(listData, id);
            dispatch(productDetailAction(productDetail[0]));
        })
    }
}

const filterProduct = (productList,id) => {
   return productList.filter((product)=>{
        return product._id === id;
    });
};