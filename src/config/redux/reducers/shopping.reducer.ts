import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivePurchase } from '../../../shared/models';
import { logout } from '../actions';


interface InitialState {
    ActivePurchase?: IActivePurchase;
}

const initialState: InitialState = {
    ActivePurchase: undefined
}

export const shoppingReducer = createSlice({
    name: 'shopping',
    initialState,

    reducers: {

        setActivePurchase: (state, action: PayloadAction<IActivePurchase | null>) => {
            state.ActivePurchase = action.payload || undefined;

            // if(state.ActivePurchase){
            //     state.ActivePurchase.
            // }
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