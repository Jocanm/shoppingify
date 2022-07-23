import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Https, Person } from '@mui/icons-material';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Box, Button, MyTextField } from '../../components';
import { PublicLayout } from '../../layouts';
import { patterns } from '../../shared';
import { useRouter } from 'next/router';
import { RootState, startCreateUser, useAppDispatch, useAppSelector } from '../../config/redux';
import { useSelector } from 'react-redux';

const FormShape = Yup.object({
    name: Yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: Yup
        .string()
        .required("Email is required")
        .lowercase()
        .matches(patterns.email, "Please provide a valid email")
        .lowercase(),
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

    const router = useRouter()
    const dispatch = useAppDispatch()
    // const { isValidating } = useAppSelector().auth
    const isValidating = useSelector((state: RootState) => state.auth.isValidating);

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const onSubmit = async ({ confirmPassword, ...data }: FormProps) => {
        const isOk = await dispatch(startCreateUser(data)).unwrap()
        if (!isOk) return;

        router.push('/')
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
                        name="name"
                        label="Full Name"
                        icon={<Person />}
                    />
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
                    <Button loaderSize='1.3rem' fontWeight='500' isLoading={isValidating}>
                        Create account
                    </Button>
                </Box>
            </PublicLayout>
        </FormProvider>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {

//     const session = await getSession({ req })

//     if (session) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             }
//         }
//     }

//     return {
//         props: {}
//     }
// }

export default RegisterPage