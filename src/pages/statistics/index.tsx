import React from 'react'
import { Box } from '../../components';
import { PrivateLayout } from '../../layout'
import { ReactElement } from 'react';

const StatisticsPage = () => {
    return (
        <Box fontSize='2rem' centerAll width='100%' height='100vh'>
            Coming Soon :)
        </Box>
    )
}

StatisticsPage.auth = true;

StatisticsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrivateLayout
            title="Shoppingify | Statistics"
            description="Statistics page"
        >
            {page}
        </PrivateLayout>
    )
}

export default StatisticsPage