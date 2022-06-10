import React from 'react'
import { PrivateLayout } from '../../layout'

const StatisticsPage = () => {
    return (
        <PrivateLayout
        title="Shoppingify | Statistics"
        description="Statistics page"
    >
        <div>HistoryPage</div>
    </PrivateLayout>
    )
}

StatisticsPage.auth = true;

export default StatisticsPage