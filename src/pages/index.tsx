import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link';
import { Box } from '../components';

const HomePage = () => {
    return (
        <Box centerAll height='100vh' flexColumn gap="2rem">
            <h1>home page</h1>

            <Link href="/auth/login" passHref>
                <h2 style={{cursor:"pointer"}}>Login</h2>
            </Link>

        </Box>
    )
}

HomePage.auth = true;

export default HomePage