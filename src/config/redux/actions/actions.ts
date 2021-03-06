import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../shared/models";
import { globalApi } from "../query";
import { setActiveProduct, setShowProductDetails, setShowShopingList } from "../reducers";
import { store } from "../store";


export const logout = createAction("LOGOUT");

export const closeProductDetails = () => {

    store.dispatch(setShowProductDetails(false));
    setTimeout(() => {
        store.dispatch(setActiveProduct(undefined))
    }, 300)

}

export const openProductDetails = (product: IProduct) => {
    store.dispatch(setShowShopingList(true))
    store.dispatch(setActiveProduct(product));
    store.dispatch(setShowProductDetails(true));
}