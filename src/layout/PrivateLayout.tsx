import Head from 'next/head'
import React from 'react'
import { ShoppingCard, Sidebar } from '../components'
import { closeMenu, useAppDispatch } from '../config/redux'
import * as S from './PrivateLayout.styles'

interface Props {
    children: React.ReactNode
    title: string
    description: string
}

export const PrivateLayout = ({ children, description, title }: Props) => {

    const dispatch = useAppDispatch()

    const onCloseMenu = () => {
        dispatch(closeMenu())
    }

    return (
        <S.PrivateLayoutContainer>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
            </Head>

            <Sidebar />

            <S.ChildrenWrapper
                onClick={onCloseMenu}
            >
                {children}
            </S.ChildrenWrapper>

            <ShoppingCard/>

        </S.PrivateLayoutContainer>
    )
}