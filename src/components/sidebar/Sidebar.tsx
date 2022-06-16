import Image from 'next/image';
import { toggleMenu, useAppDispatch } from '../../config/redux';
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
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    onClick={onToggleMenu}
                />
                <Menu />
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