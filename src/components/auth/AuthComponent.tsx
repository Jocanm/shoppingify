import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { FC } from 'react';
import { loginUser, useAppDispatch } from '../../config/redux';
import { IUser } from '../../shared/models';

interface Props {
    children: React.ReactNode;
}

export const AuthComponent: FC<Props> = ({ children }) => {

    const { data: session, status } = useSession()
    const dispatch = useAppDispatch()
    console.log({ session, status })

    useEffect(() => {

        if (status !== "authenticated") return;
        dispatch(loginUser(session?.user as IUser))

    }, [session, status, dispatch])

    return (
        <>
            {children}
        </>
    )
}
