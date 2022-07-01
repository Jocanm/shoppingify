import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivePurchase, IPurchase } from '../../../shared/models';
import { logout } from '../actions';


interface InitialState {
    activePurchase?: IActivePurchase;
    purchases: IPurchase[]
}

const initialState: InitialState = {
    activePurchase: undefined,
    purchases: []
}

export const shoppingReducer = createSlice({
    name: 'shopping',
    initialState,

    reducers: {

        setActivePurchase: (state, action: PayloadAction<IActivePurchase>) => {
            state.activePurchase = action.payload;
        },

        setPurchases: (state, action: PayloadAction<IPurchase[]>) => {
            state.purchases = action.payload;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    },
})

export default shoppingReducer.reducer;

export const {

    setActivePurchase,
    setPurchases

} = shoppingReducer.actions;