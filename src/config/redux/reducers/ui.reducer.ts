import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions';

interface InitialState {
    showMenu: boolean;
    showShoppingList: boolean;
}

const initialState: InitialState = {
    showMenu: false,
    showShoppingList: false,
}

const uiReducer = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        closeMenu: (state) => {
            if (state.showMenu) {
                state.showMenu = false;
            }
        },

        toggleMenu: (state) => {
            state.showMenu = !state.showMenu;
        },

        toggleShowShoppingList: (state) => {
            state.showShoppingList = !state.showShoppingList;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }
})

export default uiReducer.reducer;

export const {

    closeMenu,
    toggleMenu,
    toggleShowShoppingList

} = uiReducer.actions;