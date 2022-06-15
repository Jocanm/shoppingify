import React from 'react'
import { PrivateLayout } from '../../layout'

const ProfilePage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | Profile"
            description="Profile page"
        >
            <div>ProfilePage</div>
        </PrivateLayout>
    )
}

ProfilePage.auth = true

export default ProfilePage