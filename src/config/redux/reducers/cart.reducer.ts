import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

    reducers: {}
})

export default cartReducer.reducer;

export const {} = cartReducer.actions;