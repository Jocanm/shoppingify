import React from 'react'
import * as S from './Sidebar.styles'
import { Cart } from '../ui/Cart';
import Image from 'next/image';
import { routesList } from '../../config/routes';
import { SidebarItem } from './SidebarItem';
import { Box } from '../globalComponents';
import { useRouter } from 'next/router';

export const Sidebar = () => {

    const router = useRouter()

    const pushHome = () => {
        router.asPath !== '/' && router.push('/')
    }

    return (
        <S.SidebarContainer>
            <Image
                src="/assets/logo.svg"
                alt="logo"
                width={40}
                height={40}
                onClick={pushHome}
            />
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
