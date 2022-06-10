import React from 'react'
import * as S from './Sidebar.styles'
import { Cart } from '../ui/Cart';
import Image from 'next/image';

export const Sidebar = () => {
    return (
        <S.SidebarContainer>
            <Image
                src="/assets/logo.svg"
                alt="logo"
                width={40}
                height={40}
            />
            <span>sidebar</span>
            <Cart/>
        </S.SidebarContainer>
    )
}
