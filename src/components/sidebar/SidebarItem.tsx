import { Tooltip } from '@mui/material'
import React, { useMemo } from 'react'
import { RouteItem } from '../../config/routes'
import * as S from './Sidebar.styles'
import Zoom from '@mui/material/Zoom';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const SidebarItem = ({ icon, name, path }: RouteItem) => {

    const { asPath } = useRouter()

    const isActive = useMemo(() => (
        asPath.includes(path) && path !== '/'
    ), [asPath, path])

    const isHome = useMemo(() => (
        asPath === '/' && path === '/'
    ), [asPath, path])

    return (
        <S.RouteItemBox isActive={isHome || isActive}>

            <Link href={path} passHref>
                <Tooltip
                    title={name}
                    placement="left"
                    arrow
                    TransitionComponent={Zoom}
                    enterDelay={500}
                >
                    {icon}
                </Tooltip>
            </Link>
            <div />
        </S.RouteItemBox>
    )
}
