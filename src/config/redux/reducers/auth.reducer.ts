import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../shared/models';
import { logout } from '../actions';


interface InitialProps {
    user?: IUser;
    isAuthenticated: boolean;
    isValidating: boolean;
}


export const initialState: InitialProps = {
    isAuthenticated: false,
    isValidating: false,
    user: undefined,
}


const authReducer = createSlice({
    name: 'auth',
    initialState,

    reducers: {

        loginUser: (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload;
            state.isAuthenticated = true;
        },

        setIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
            state.isAuthenticated = payload;
        },

        setIsValidating: (state, { payload }: PayloadAction<boolean>) => {
            state.isValidating = payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
    }

})


export const {
    loginUser,
    setIsAuthenticated,
    setIsValidating
} = authReducer.actions;

export default authReducer.reducer;