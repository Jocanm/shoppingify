import React, { useEffect } from 'react'
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface Props {
    children: React.ReactNode
}

export const ProtectedRoute: FC<Props> = ({ children }) => {

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push('/auth/login')
        }

    }, [status, router])

    if (status === "unauthenticated") {
        return null
    }

    return (
        <>{children}</>
    )
}
