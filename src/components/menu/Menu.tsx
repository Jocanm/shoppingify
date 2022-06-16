import { Home, Logout } from '@mui/icons-material'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { closeMenu, useAppDispatch, useAppSelector } from '../../config/redux'
import { logout } from '../../config/redux/actions'
import * as S from './Menu.styles'


export const Menu = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const { showMenu } = useAppSelector().ui

    const onGoHome = () => {
        router.push('/')
        dispatch(closeMenu())
    }

    const onLogout = () => {
        dispatch(logout())
        signOut({
            redirect: false,
            callbackUrl: '/auth/login'
        })
    }

    return (
        <S.MenuWrapper
            className='animate__animated animate__faster animate__fadeIn'
            showMenu={showMenu}
        >
            <div onClick={onGoHome}>
                <Home />
                Home
            </div>
            <span />
            <div className='logout' onClick={onLogout}>
                <Logout />
                Logout
            </div>
        </S.MenuWrapper>
    )
}
