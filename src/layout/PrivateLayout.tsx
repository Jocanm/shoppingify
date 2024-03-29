import Head from 'next/head'
import React from 'react'
import { ShoppingCard, Sidebar } from '../components'
import { FullScreenVanillaLoder } from '../components/ui/loders'
import { closeMenu, RootState, useAppDispatch, useAppSelector } from '../config/redux'
import * as S from './PrivateLayout.styles'
import { useSelector } from 'react-redux';

interface Props {
    children: React.ReactNode
    title: string
    description: string
}

export const PrivateLayout = ({ children, description, title }: Props) => {

    const dispatch = useAppDispatch()
    // const { showOpaqueLoader } = useAppSelector().ui
    // const { activeProduct } = useAppSelector().categories

    const showOpaqueLoader = useSelector((state: RootState) => state.ui.showOpaqueLoader)

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

            <ShoppingCard />

            {
                showOpaqueLoader && (
                    <FullScreenVanillaLoder
                        isOpaque
                    />
                )
            }

        </S.PrivateLayoutContainer>
    )
}