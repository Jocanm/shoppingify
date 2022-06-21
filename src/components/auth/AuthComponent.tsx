import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { FC } from 'react';
import { loginUser, startGetInitialData, useAppDispatch, useAppSelector } from '../../config/redux';
import { IUser } from '../../shared/models';
import { FullScreenVanillaLoder } from '../ui/loders';

interface Props {
    children: React.ReactNode;
}

export const AuthComponent: FC<Props> = ({ children }) => {

    const { data: session, status } = useSession()
    const dispatch = useAppDispatch()

    const { isGettingInitialData } = useAppSelector().auth

    useEffect(() => {

        if (status !== "authenticated") return;
        dispatch(loginUser(session?.user as IUser))
        dispatch(startGetInitialData())

    }, [session, status, dispatch])

    // if ((status === "loading") || (status === "authenticated" && isGettingInitialData)) {
    //     return <FullScreenVanillaLoder />
    // }
    
    if ((status === "loading")) {
        return <FullScreenVanillaLoder />
    }

    return (
        <>
            {children}
        </>
    )
}
