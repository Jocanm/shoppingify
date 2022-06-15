import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../../shared/models';
import { logout } from '../actions';


interface InitialState {
    categories: ICategory[];
}


const initialState: InitialState = {
    categories: [],
}

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,

    reducers: {
        setCategories: (state, { payload }: PayloadAction<ICategory[]>) => {
            state.categories = payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }

})

export default categoriesReducer.reducer;

export const {

    setCategories

} = categoriesReducer.actions;