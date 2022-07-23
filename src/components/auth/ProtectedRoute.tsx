import React, { useEffect } from 'react'
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { RootState, startGetInitialData, useAppDispatch, useAppSelector } from '../../config/redux';
import { FullScreenVanillaLoder } from '../ui/loders';
import { useSelector } from 'react-redux';

interface Props {
    children: React.ReactNode
}

export const ProtectedRoute: FC<Props> = ({ children }) => {

    const dispatch = useAppDispatch()
    // const { isAuthenticated,isGettingInitialData } = useAppSelector().auth
    const isGettingInitialData = useSelector((state: RootState) => state.auth.isGettingInitialData)
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login')
        }
    }, [status, router])

    useEffect(() => {
        if (!isAuthenticated) return;
        dispatch(startGetInitialData())
    }, [dispatch, isAuthenticated])

    if (status === "unauthenticated") {
        return null;
    }

    if (isGettingInitialData) {
        return <FullScreenVanillaLoder size='2.5rem' />
    }

    return (
        <>{children}</>
    )
}
