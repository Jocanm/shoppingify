import React from 'react'
import { Box } from '../../components';
import { PrivateLayout } from '../../layout'

const StatisticsPage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | Statistics"
            description="Statistics page"
        >
            <Box fontSize='2rem' centerAll width='100%' height='100vh'>
                Coming Soon :)
            </Box>
        </PrivateLayout>
    )
}

StatisticsPage.auth = true;

export default StatisticsPage