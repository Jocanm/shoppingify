import { GitHub } from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { Box } from '../../components';
import { useAppDispatch } from '../../config/redux';
import { CredentialsTypes, startOatuhSignIn } from '../../config/redux/thunks';
import * as S from './PublicLayout.styles';

interface Props {
    children: React.ReactNode
    title: string
    description: string
    viewTitle: string
}

export const PublicLayout: FC<Props> = ({ children, description, title, viewTitle }) => {

    const { asPath } = useRouter()
    const dispatch = useAppDispatch()

    const oAuthLogin = (credential:CredentialsTypes) => {
        dispatch(startOatuhSignIn(credential))
    }

    const isLoginPage = useMemo(() => {
        return asPath.includes('login')
    }, [asPath])

    return (
        <S.PublicLayoutWrapper>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
            </Head>
            <S.FormWrapper>
                <Box flex flexColumn gap="1rem">
                    <Box flex alignCenter gap=".45rem">
                        <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
                        <h1>Shoppingify</h1>
                    </Box>
                    <h2>{viewTitle}</h2>
                </Box>

                {children}

                <S.SocialMediaContainer>
                    <h4>or continue with these social profile</h4>
                    <Box flex justifyCenter gap="1rem">
                        {/* <S.SocialMediaIcon>
                            <Google />
                        </S.SocialMediaIcon> */}
                        <S.SocialMediaIcon onClick={() => oAuthLogin('github')}>
                            <GitHub />
                        </S.SocialMediaIcon>
                        {/* <S.SocialMediaIcon>
                            <Facebook />
                        </S.SocialMediaIcon> */}
                    </Box>
                    {
                        !isLoginPage
                            ? (
                                <Box flex gap=".45rem" justifyCenter>
                                    <span>Adready a member?</span>
                                    <Link href="/auth/login">
                                        <a className='auth-option'>Login</a>
                                    </Link>
                                </Box>
                            )
                            : (
                                <Box flex gap=".45rem" justifyCenter>
                                    <span>Don’t have an account yet?</span>
                                    <Link href="/auth/register">
                                        <a className='auth-option'>Register</a>
                                    </Link>
                                </Box>
                            )
                    }
                </S.SocialMediaContainer>
                <Box display="none" flexColumn alignCenter gap="1rem" className='user-info-sm'>
                    <span>created by <span className='creator-name'>Jose Angarita</span></span>
                    <span>devChallenges.io</span>
                </Box>
            </S.FormWrapper>
            <Box flex justifyBetween width='450px' className='user-info-not-sm'>
                <span>created by <span className='creator-name'>Jose Angarita</span></span>
                <span>devChallenges.io</span>
            </Box>
        </S.PublicLayoutWrapper>
    )
}
