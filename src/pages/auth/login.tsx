import { yupResolver } from '@hookform/resolvers/yup'
import EmailIcon from '@mui/icons-material/Email'
import HttpsIcon from '@mui/icons-material/Https'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Box, Button, MyTextField } from '../../components'
import { startSignInUser, useAppDispatch, useAppSelector } from '../../config/redux'
import { PublicLayout } from '../../layouts'
import { patterns } from '../../shared'

const FormShape = Yup.object({
    email: Yup
        .string()
        .required("Email is required")
        .lowercase()
        .matches(patterns.email, "Please provide a valid email"),
    password: Yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
})

export interface FormProps extends Yup.InferType<typeof FormShape> { }

const LoginPage = () => {

    const dispatch = useAppDispatch()
    const { isValidating } = useAppSelector().auth
    const router = useRouter()

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const onSubmit = async(data: FormProps) => {
        const isOk = await dispatch(startSignInUser(data)).unwrap()
        if(!isOk) return;

        router.push('/')
    }

    return (
        <FormProvider {...methods}>
            <PublicLayout description='Login Page' title="shoppingify | Login" viewTitle='Login'>
                <Box
                    flex flexColumn gap="1.2rem"
                    as="form"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
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
                    <Button loaderSize='1.3rem' fontWeight='500' isLoading={isValidating}>
                        Login
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


export default LoginPage