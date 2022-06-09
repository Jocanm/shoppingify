import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "../../../shared/helpers";
import { isAxiosError, rt, shopApi } from "../../services";
import { CredentialsTypes, ICreateUser, ISignInUser } from "./thunks.interfaces";
import { setIsValidating } from "../reducers";
import { signIn } from "next-auth/react";


export const startCreateUser = createAsyncThunk(
    "auth/startCreateUser",
    async (user: ICreateUser, { dispatch }) => {

        dispatch(setIsValidating(true))

        try {

            await shopApi.post(rt.createUserRT, user)

            //@ts-ignore
            const { ok } = await signIn('credentials', {
                email: user.email,
                password: user.password,
                redirect: false
            })

            if (!ok) return;

            toast("User created successfully")
            return true;

        } catch (error) {

            if (isAxiosError(error)) {
                toast("User already exist", "error")
                console.error(error)
            } else {
                toast("Something went wrong", "error")
                console.error(error)
            }

        } finally {
            dispatch(setIsValidating(false))
        }

    }
)

export const startSignInUser = createAsyncThunk(
    "auth/startSignInUser",
    async (user: ISignInUser, { dispatch }) => {

        dispatch(setIsValidating(true))

        try {

            //@ts-ignore
            const { ok } = await signIn('credentials', {
                ...user,
                redirect: false
            })

            if (!ok) {
                return toast("Invalid email or password", "error")
            }

            toast("Welcome!")
            return true;

        } catch (error) {

            if (isAxiosError(error)) {
                toast(`Invalid email or password`, "error")
                console.error(error)
            } else {
                toast("Something went wrong", "error")
                console.error(error)
            }

        } finally {
            dispatch(setIsValidating(false))
        }
    }
)

export const startOatuhSignIn = createAsyncThunk(
    "auth/oatuhSignIn",
    async (credential: CredentialsTypes) => {

        try {
            
        } catch (error) {
            console.error(error)
            toast("Something went wrong", "error")
        }

    }
)