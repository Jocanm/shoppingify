import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { FC } from 'react';
import { loginUser, useAppDispatch } from '../../config/redux';
import { IUser } from '../../shared/models';
import { FullScreenVanillaLoder } from '../ui/loders';

interface Props {
    children: React.ReactNode;
}

const protectedRoutes = [
    '/', 'dashboard'
]

export const AuthComponent: FC<Props> = ({ children }) => {

    const { data: session, status } = useSession()
    const dispatch = useAppDispatch()

    useEffect(() => {

        if (status !== "authenticated") return;
        dispatch(loginUser(session?.user as IUser))

    }, [session, status, dispatch])

    if (status === "loading") {
        return <FullScreenVanillaLoder />
    }

    return (
        <>
            {children}
        </>
    )
}
