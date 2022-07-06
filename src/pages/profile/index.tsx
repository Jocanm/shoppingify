import React from 'react'
import { Box } from '../../components'
import { PrivateLayout } from '../../layout'
import { ReactElement } from 'react';

const ProfilePage = () => {
    return (
        <Box fontSize='2rem' centerAll width='100%' height='100vh'>
            Coming Soon :)
        </Box>
    )
}

ProfilePage.auth = true

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrivateLayout
            title="Shoppingify | Profile"
            description="Profile page"
        >
            {page}
        </PrivateLayout>
    )
}

export default ProfilePage