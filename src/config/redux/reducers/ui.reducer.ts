import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from '../actions';
import { startCreateNewProduct, startCreateShoppingList, startUpdateShoppingListData } from '../thunks';

interface InitialState {
    showMenu: boolean;
    showShoppingList: boolean;
    showOpaqueLoader: boolean;
    deleteProductModal: boolean;
    editShoppingListMode: boolean;
}

const initialState: InitialState = {
    showMenu: false,
    showShoppingList: false,
    showOpaqueLoader: false,
    deleteProductModal: false,
    editShoppingListMode: false
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
        },

        setDeleteProductModal: (state, { payload }: PayloadAction<boolean>) => {
            state.deleteProductModal = payload;
        },

        setEditShoppingListMode: (state, { payload }: PayloadAction<boolean>) => {
            state.editShoppingListMode = payload;
        },

        toggleEditShoppingListMode: (state) => {
            state.editShoppingListMode = !state.editShoppingListMode;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)

            /* -------------------------------------------------- */

            .addCase(startCreateNewProduct.pending, (state) => {
                state.showOpaqueLoader = true;
            })
            .addCase(startCreateNewProduct.fulfilled, (state) => {
                state.showOpaqueLoader = false;
            })

            /* -------------------------------------------------- */

            .addCase(startCreateShoppingList.pending, (state) => {
                state.showOpaqueLoader = true;
            })
            .addCase(startCreateShoppingList.fulfilled, (state) => {
                state.showOpaqueLoader = false;
            })

            /* -------------------------------------------------- */

            .addCase(startUpdateShoppingListData.pending, (state) => {
                state.showOpaqueLoader = true;
            })
            .addCase(startUpdateShoppingListData.fulfilled, (state) => {
                state.showOpaqueLoader = false;
            })
    }
})

export default uiReducer.reducer;

export const {

    closeMenu,
    toggleMenu,
    toggleShowShoppingList,
    setDeleteProductModal,
    setEditShoppingListMode,
    toggleEditShoppingListMode

} = uiReducer.actions;