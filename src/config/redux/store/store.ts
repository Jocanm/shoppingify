import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authReducer, cartReducer, categoriesReducer, shoppingReducer, uiReducer } from '../reducers';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        ui: uiReducer,
        categories: categoriesReducer,
        shopping: shoppingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Custom app selector
export const useAppSelector = () => useSelector((state: RootState) => state)