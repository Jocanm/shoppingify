import React, { useState } from 'react'
import * as S from './Sidebar.styles'
import { Cart } from '../ui/Cart';
import Image from 'next/image';
import { routesList } from '../../config/routes';
import { SidebarItem } from './SidebarItem';
import { Box } from '../globalComponents';
import { useRouter } from 'next/router';
import { Menu } from '../menu';
import { toggleMenu, useAppDispatch } from '../../config/redux';

export const Sidebar = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const onToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <S.SidebarContainer>
            <Box relative>
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    onClick={onToggleMenu}
                />
                <Menu/>
            </Box>
            <Box flex flexColumn gap="2.5rem" as="ul" width="100%">
                {
                    routesList.map(route => (
                        <SidebarItem
                            {...route}
                            key={route.path}
                        />
                    ))
                }
            </Box>
            <Cart />
        </S.SidebarContainer>
    )
}