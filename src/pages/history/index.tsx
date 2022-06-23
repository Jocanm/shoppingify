import React from 'react'
import { Box } from '../../components';
import { PrivateLayout } from '../../layout'

const HistoryPage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            <Box fontSize='2rem' centerAll width='100%' height='100vh'>
                Coming Soon :)
            </Box>
        </PrivateLayout>
    )
}

HistoryPage.auth = true;

export default HistoryPage