import React from 'react'
import { Box } from '../../components'
import { PrivateLayout } from '../../layout'

const ProfilePage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | Profile"
            description="Profile page"
        >
            <Box fontSize='2rem' centerAll width='100%' height='100vh'>
                Coming Soon :)
            </Box>
        </PrivateLayout>
    )
}

ProfilePage.auth = true

export default ProfilePage