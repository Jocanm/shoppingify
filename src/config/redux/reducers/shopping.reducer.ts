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

        setActivePurchase: (state, { payload }: PayloadAction<IActivePurchase>) => {
            state.activePurchase = payload;
        },

        setPurchases: (state, { payload }: PayloadAction<IPurchase[]>) => {
            state.purchases = payload;
        },

        addNewPurchase: (state, { payload }: PayloadAction<IPurchase>) => {
            state.purchases.unshift(payload);
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
    setPurchases,
    addNewPurchase

} = shoppingReducer.actions;