import { Home, Logout } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { closeMenu, globalApi, RootState, useAppDispatch, useAppSelector } from '../../config/redux'
import { logout } from '../../config/redux/actions'
import * as S from './Menu.styles'
import { useSelector } from 'react-redux';

export const Menu = () => {

    const dispatch = useAppDispatch()
    // const { showMenu } = useAppSelector().ui
    const showMenu = useSelector((state: RootState) => state.ui.showMenu)

    const router = useRouter()

    const onGoHome = () => {
        router.push('/')
        dispatch(closeMenu())
    }

    const onLogout = async() => {
        await signOut({
            redirect: false,
            callbackUrl: '/auth/login'
        })
        dispatch(logout())
    }

    return (
        <AnimatePresence>
            {
                showMenu && (
                    <S.MenuWrapper
                        as={motion.section}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key='menu'
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
        </AnimatePresence>
    )
}
