import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions';

interface InitialState {
    showMenu: boolean;
}

const initialState: InitialState = {
    showMenu: false
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
    toggleMenu

} = uiReducer.actions;