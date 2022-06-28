import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivePurchase } from '../../../shared/models';
import { logout } from '../actions';


interface InitialState {
    activePurchase?: IActivePurchase;
}

const initialState: InitialState = {
    activePurchase: undefined
}

export const shoppingReducer = createSlice({
    name: 'shopping',
    initialState,

    reducers: {

        setActivePurchase: (state, action: PayloadAction<IActivePurchase>) => {
            state.activePurchase = action.payload;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }
})

export default shoppingReducer.reducer;

export const {

    setActivePurchase

} = shoppingReducer.actions;