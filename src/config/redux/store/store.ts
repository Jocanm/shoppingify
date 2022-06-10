import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from '../reducers/auth.reducer';
import cartReducer from "../reducers/cart.reducer";
import uiReducer from '../reducers/ui.reducer';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        ui: uiReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Custom app selector
export const useAppSelector = () => useSelector((state: RootState) => state)