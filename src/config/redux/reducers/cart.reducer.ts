import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../shared/models';
import { logout } from '../actions';

export interface CartItem {
    [key: string]: {
        product: IProduct;
        quantity: number;
        done: boolean;
    };
}

interface InitialState {
    cart: CartItem;
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

        setCart: (state, { payload }: PayloadAction<CartItem>) => {
            state.cart = payload;
            state.cartTotal = Object.values(payload).length
        },

        addToCart: (state, { payload }: PayloadAction<IProduct>) => {

            const { id } = payload;
            const { [id]: toAdd } = state.cart;

            if (!toAdd) {
                const newCart = {
                    ...state.cart,
                    [id]: {
                        product: payload,
                        quantity: 1,
                        done: false
                    }
                }
                const numberOfItems = Object.keys(newCart).length;

                state.cart = newCart;
                state.cartTotal = numberOfItems;
            } else {
                const newCart = {
                    ...state.cart,
                    [id]: {
                        ...toAdd,
                        quantity: toAdd.quantity + 1
                    }
                }
                const numberOfItems = Object.keys(newCart).length;

                state.cart = newCart;
                state.cartTotal = numberOfItems;
            }

        },

        removeFromCart: (state, { payload:id }: PayloadAction<string>) => {

            const { [id]: toRemove, ...rest } = state.cart;
            state.cart = rest;
            state.cartTotal = Object.keys(rest).length;

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
        },

        setDoneStatus: (state, { payload }: PayloadAction<{ id: string, done: boolean }>) => {

            const { id, done } = payload;
            const { [id]: toSet } = state.cart;

            toSet.done = done;

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
    removeQuantity,
    setCart,
    setDoneStatus

} = cartReducer.actions;