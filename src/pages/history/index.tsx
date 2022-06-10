import React from 'react'
import { PrivateLayout } from '../../layout'

const HistoryPage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            <div>HistoryPage</div>
        </PrivateLayout>
    )
}

HistoryPage.auth = true;

export default HistoryPage