import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from '../actions';

interface InitialState {
    cart: any[];
    cartTotal: number;
}

const initialState: InitialState = {
    cart: [],
    cartTotal: 0
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }
})

export default cartReducer.reducer;

export const { } = cartReducer.actions;