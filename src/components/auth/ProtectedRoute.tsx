import React, { useEffect } from 'react'
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { startGetInitialData, useAppDispatch, useAppSelector } from '../../config/redux';
import { FullScreenVanillaLoder } from '../ui/loders';

interface Props {
    children: React.ReactNode
}

export const ProtectedRoute: FC<Props> = ({ children }) => {

    const dispatch = useAppDispatch()
    const { isGettingInitialData } = useAppSelector().auth

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login')
        }
    }, [status, router])

    useEffect(() => {
        dispatch(startGetInitialData())
    }, [dispatch])

    if (status === "unauthenticated") {
        return null;
    }

    // if (isGettingInitialData) {
    //     return <FullScreenVanillaLoder size='2rem'/>
    // }

    return (
        <>{children}</>
    )
}
