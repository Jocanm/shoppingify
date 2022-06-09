import React from 'react'
import { GetServerSideProps } from 'next'
import { FormProvider, useForm } from 'react-hook-form';
import { PublicLayout } from '../../layouts';
import { Box, Button, MyTextField } from '../../components';
import * as Yup from 'yup';
import { patterns } from '../../shared';
import { yupResolver } from '@hookform/resolvers/yup';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';
import { Email, Https} from '@mui/icons-material';

const FormShape = Yup.object({
    email: Yup
        .string()
        .required("Email is required")
        .matches(patterns.email, "Please provide a valid email"),
    password: Yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup
        .string()
        .required("This field is required")
        .oneOf([Yup.ref('password'), null], "Passwords must match")
})

export interface FormProps extends Yup.InferType<typeof FormShape> { }

const RegisterPage = () => {
    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const onSubmit = (data: FormProps) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <PublicLayout description='Create a new account' title="Shoppingify | Register" viewTitle='Register'>
                <Box
                    flex flexColumn gap="1rem"
                    as="form"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <MyTextField
                        name="email"
                        label="Email"
                        icon={<Email />}
                    />
                    <MyTextField
                        name="password"
                        label="Password"
                        type="password"
                        icon={<Https />}
                    />
                    <MyTextField
                        name="confirmPassword"
                        label="Confirm password"
                        type="password"
                        icon={<Https />}
                    />
                    <Button loaderSize='1.3rem' fontWeight='500'>
                        Login
                    </Button>
                </Box>
            </PublicLayout>
        </FormProvider>
    )
}

export default RegisterPage