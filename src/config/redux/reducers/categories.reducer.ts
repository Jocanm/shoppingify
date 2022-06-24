import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, IProduct } from '../../../shared/models';
import { logout } from '../actions';


interface InitialState {
    categories: ICategory[];
    activeProduct?: IProduct;
}


const initialState: InitialState = {
    categories: [],
    activeProduct: undefined
}

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,

    reducers: {

        setCategories: (state, { payload }: PayloadAction<ICategory[]>) => {
            state.categories = payload;
        },

        addCategory: (state, { payload }: PayloadAction<ICategory>) => {

            if (state.categories.find(category => category.id === payload.id)) {
                return;
            }

            state.categories.unshift(payload);

        },

        addProduct: (state, { payload }: PayloadAction<IProduct>) => {

            const category = state.categories.find(category => category.id === payload.categoryId);

            if (!category) {
                return;
            }

            category.products.push(payload);

        },

        deleteProduct: (state, { payload }: PayloadAction<string>) => {

            state.categories.forEach(category => {

                category.products = category.products.filter(product => product.id !== payload);

            })

        },

        setActiveProduct: (state, { payload }: PayloadAction<IProduct | undefined>) => {
            state.activeProduct = payload;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }

})

export default categoriesReducer.reducer;

export const {

    setCategories,
    addCategory,
    addProduct,
    setActiveProduct,
    deleteProduct

} = categoriesReducer.actions;