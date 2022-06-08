import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as S from '../../shared/styles/pages'
import * as Yup from 'yup'
import { patterns } from '../../shared'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, MyTextField } from '../../components'
import Image from 'next/image';
import { Button } from '@mui/material'

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

const LoginPage = () => {

    const methods = useForm({ resolver: yupResolver(FormShape) })

    return (
        <FormProvider {...methods}>
            <S.LoginWrapper>
                <S.LoginForm>
                    <Box flex flexColumn gap="1rem">
                        <Box flex alignCenter gap=".45rem">
                            <Image src="/assets/logo.svg" alt="logo" width={30} height={30}/>
                            <S.LoginTitle>Shoppingify</S.LoginTitle>
                        </Box>
                        <h2>Join thousands of learners from around the world </h2>
                        <h3>Master web development by making real-life projects. There are multiple paths for you to choose</h3>
                    </Box>

                    <S.InputContainer>
                        <MyTextField
                            name="email"
                            label="Email"
                        />
                        <MyTextField
                            name="password"
                            label="Password"
                        />
                        <Button variant='contained'>
                            Login
                        </Button>
                    </S.InputContainer>
                </S.LoginForm>
            </S.LoginWrapper>
        </FormProvider>
    )
}

export default LoginPage