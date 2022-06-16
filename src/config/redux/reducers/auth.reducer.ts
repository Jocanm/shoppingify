import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../shared/models';
import { logout } from '../actions';
import { startGetInitialData } from '../thunks';


interface InitialProps {
    user?: IUser;
    isAuthenticated: boolean;
    isValidating: boolean;
    isGettingInitialData: boolean;
}


export const initialState: InitialProps = {
    isAuthenticated: false,
    isValidating: false, // usado para loading en boton de login y registro
    user: undefined,
    isGettingInitialData: false, // usado para loading en el inicio de la app
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
        },

        setIsGettingInitialData: (state, { payload }: PayloadAction<boolean>) => {
            state.isGettingInitialData = payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)

            .addCase(startGetInitialData.pending, (state) => {
                state.isGettingInitialData = true;
            })
            .addCase(startGetInitialData.fulfilled, (state) => {
                state.isGettingInitialData = false;
            })
    }

})


export const {

    loginUser,
    setIsAuthenticated,
    setIsValidating,
    setIsGettingInitialData

} = authReducer.actions;

export default authReducer.reducer;