import { yupResolver } from '@hookform/resolvers/yup'
import EmailIcon from '@mui/icons-material/Email'
import HttpsIcon from '@mui/icons-material/Https'
import Image from 'next/image'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Box, Button, MyTextField } from '../../components'
import { patterns } from '../../shared'
import * as S from '../../shared/styles/pages'
import GoogleIcon from '@mui/icons-material/Google';
import { GitHub, Facebook } from '@mui/icons-material'

const FormShape = Yup.object({
    email: Yup
        .string()
        .required("Email is required")
        .matches(patterns.email, "Please provide a valid email"),
    password: Yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
})

export interface FormProps extends Yup.InferType<typeof FormShape> { }

const LoginPage = () => {

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const onSubmit = (data: FormProps) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <S.LoginWrapper>
                <S.LoginForm onSubmit={methods.handleSubmit(onSubmit)}>
                    <Box flex flexColumn gap="1rem">
                        <Box flex alignCenter gap=".45rem">
                            <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
                            <S.LoginTitle>Shoppingify</S.LoginTitle>
                        </Box>
                        <h2>Login</h2>
                    </Box>

                    <S.InputContainer>
                        <MyTextField
                            name="email"
                            label="Email"
                            icon={<EmailIcon />}
                        />
                        <MyTextField
                            name="password"
                            label="Password"
                            type="password"
                            icon={<HttpsIcon />}
                        />
                        <Button loaderSize='1.3rem' fontWeight='500'>
                            Login
                        </Button>
                    </S.InputContainer>

                    <S.SocialMediaContainer>
                        <h4>or continue with these social profile</h4>
                        <Box flex justifyCenter gap="1rem">
                            <S.SocialMediaIcon>
                                <GoogleIcon/>
                            </S.SocialMediaIcon>
                            <S.SocialMediaIcon>
                                <GitHub/>
                            </S.SocialMediaIcon>
                            <S.SocialMediaIcon>
                                <Facebook/>
                            </S.SocialMediaIcon>
                        </Box>
                    </S.SocialMediaContainer>
                </S.LoginForm>
            </S.LoginWrapper>
        </FormProvider>
    )
}

export default LoginPage


{/* <Box flex flexColumn gap="1rem">
<Box flex alignCenter gap=".45rem">
    <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
    <S.LoginTitle>Shoppingify</S.LoginTitle>
</Box>
<h2>Join thousands of learners from around the world </h2>
<h3>Master web development by making real-life projects. There are multiple paths for you to choose</h3>
</Box> */}