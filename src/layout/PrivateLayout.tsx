import Head from 'next/head'
import React from 'react'
import { Box, Sidebar } from '../components'
import * as S from './PrivateLayout.styles'

interface Props {
    children: React.ReactNode
    title: string
    description: string
}

export const PrivateLayout = ({ children, description, title }: Props) => {
    return (
        <S.PrivateLayoutContainer>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
            </Head>

            <Sidebar />

            <S.ChildrenWrapper>
                {children}
            </S.ChildrenWrapper>

        </S.PrivateLayoutContainer>
    )
}
