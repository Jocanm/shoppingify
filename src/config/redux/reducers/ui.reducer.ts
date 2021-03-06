import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from '../actions';
import { startCreateNewProduct, startCreateShoppingList, startGetAllPurchases, startUpdateShoppingListData } from '../thunks';

interface InitialState {
    showMenu: boolean;
    showShoppingList: boolean;
    showOpaqueLoader: boolean;
    showProductDetails: boolean;

    deleteProductModal: boolean;
    cancelListModal: boolean;
    completeListModal: boolean;

    editShoppingListMode: boolean;
    isGettingPurchases: boolean;
    showProductForm: boolean;
}

const initialState: InitialState = {
    showMenu: false,
    showShoppingList: false,
    showOpaqueLoader: false,
    showProductDetails: false,

    deleteProductModal: false,
    cancelListModal: false,
    completeListModal: false,

    editShoppingListMode: false,
    isGettingPurchases: false,
    showProductForm: false,
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

        setShowShopingList: (state, action: PayloadAction<boolean>) => {
            state.showShoppingList = action.payload;
        },

        setShowProductDetails: (state, action: PayloadAction<boolean>) => {
            state.showProductDetails = action.payload;
        },

        setDeleteProductModal: (state, { payload }: PayloadAction<boolean>) => {
            state.deleteProductModal = payload;
        },

        setEditShoppingListMode: (state, { payload }: PayloadAction<boolean>) => {
            state.editShoppingListMode = payload;
        },

        toggleEditShoppingListMode: (state) => {
            state.editShoppingListMode = !state.editShoppingListMode;
        },

        setCancelListModal: (state, { payload }: PayloadAction<boolean>) => {
            state.cancelListModal = payload;
        },

        setCompleteListModal: (state, { payload }: PayloadAction<boolean>) => {
            state.completeListModal = payload;
        },

        setShowProductForm: (state, { payload }: PayloadAction<boolean>) => {
            state.showProductForm = payload;
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

            /* -------------------------------------------------- */
            .addCase(startGetAllPurchases.pending, (state) => {
                state.isGettingPurchases = true;
            })
            .addCase(startGetAllPurchases.fulfilled, (state) => {
                state.isGettingPurchases = false;
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
    toggleEditShoppingListMode,
    setCancelListModal,
    setCompleteListModal,
    setShowShopingList,
    setShowProductDetails,
    setShowProductForm

} = uiReducer.actions;