import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { authReducer, cartReducer, categoriesReducer, shoppingReducer, uiReducer } from '../reducers';
import { globalApi } from '../query/globalApi';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        ui: uiReducer,
        categories: categoriesReducer,
        shopping: shoppingReducer,

        // TOOLKIT QUERY
        [globalApi.reducerPath]: globalApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(globalApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Custom app selector
export const useAppSelector = () => useSelector((state: RootState) => state)

setupListeners(store.dispatch)