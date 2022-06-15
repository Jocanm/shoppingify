import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../shared/models';
import { logout } from '../actions';

interface InitialState {
    cart: {
        [key: string]: {
            product: IProduct;
            quantity: number;
        };
    };
    cartTotal: number;
}

const initialState: InitialState = {
    cart: {},
    cartTotal: 0
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, { payload }: PayloadAction<IProduct>) => {

            const { id } = payload;
            const { [id]: toAdd } = state.cart;

            if (!toAdd) {
                const newCart = {
                    ...state.cart,
                    [id]: {
                        product: payload,
                        quantity: 1
                    }
                }
                const numberOfItems = Object.keys(newCart).length;

                state.cart = newCart;
                state.cartTotal = numberOfItems;
            }

        },

        removeFromCart: (state, { payload }: PayloadAction<IProduct>) => {

            const { id } = payload;
            const { [id]: toRemove, ...rest } = state.cart;
            state.cart = rest;

        },

        addQuantity: (state, { payload }: PayloadAction<IProduct>) => {

            const { id } = payload;
            const { [id]: toAdd } = state.cart;

            toAdd.quantity++;

        },

        removeQuantity: (state, { payload }: PayloadAction<IProduct>) => {

            const { id } = payload;
            const { [id]: toRemove } = state.cart;

            if (toRemove.quantity > 1) {
                toRemove.quantity--;
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }
})

export default cartReducer.reducer;

export const {

    addToCart,
    removeFromCart,
    addQuantity,
    removeQuantity

} = cartReducer.actions;