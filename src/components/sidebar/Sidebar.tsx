/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { toggleMenu, useAppDispatch, useAppSelector } from '../../config/redux';
import { routesList } from '../../config/routes';
import { Box } from '../globalComponents';
import { Menu } from '../menu';
import { Cart } from '../ui/Cart';
import * as S from './Sidebar.styles';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {

    const dispatch = useAppDispatch()

    const onToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <S.SidebarContainer>
            <Box relative>
                <img
                    src="/assets/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    onClick={onToggleMenu}
                />
                <Menu />
            </Box>
            <S.RoutesList>
                {
                    routesList.map(route => (
                        <SidebarItem
                            {...route}
                            key={route.path}
                        />
                    ))
                }
            </S.RoutesList>
            <Cart />
        </S.SidebarContainer>
    )
}