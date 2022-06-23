import { useSession } from 'next-auth/react';
import React, { FC, useEffect } from 'react';
import { loginUser, useAppDispatch } from '../../config/redux';
import { IUser } from '../../shared/models';
import { FullScreenVanillaLoder } from '../ui/loders';

interface Props {
    children: React.ReactNode;
}

export const AuthComponent: FC<Props> = ({ children }) => {

    const { data: session, status } = useSession()
    const dispatch = useAppDispatch()

    useEffect(() => {

        if (status !== "authenticated") return;
        dispatch(loginUser(session?.user as IUser))

    }, [session, status, dispatch])
    
    if (status === "loading") {
        return <FullScreenVanillaLoder size='2rem' />
    }

    return (
        <>
            {children}
        </>
    )
}
