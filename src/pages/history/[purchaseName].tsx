import React from 'react'
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { PrivateLayout } from '../../layout';

const PurchaseDetails = () => {

    const { purchaseName, id } = useRouter().query

    return (
        <div>
            {purchaseName}
            {id}
        </div>
    )
}

PurchaseDetails.auth = true;

PurchaseDetails.getLayout = (page: ReactElement, other: any) => {

    const { purchaseName } = (page as { [key: string]: any })?._owner?.memoizedProps?.router?.query || {}

    const title = `Shoppingify | ${purchaseName || 'Shopping List Details'}`

    const description = purchaseName ? 'Details of your shopping list': `Details of your shopping list - ${purchaseName}`

    return (
        <PrivateLayout
            title={title}
            description={description}
        >
            {page}
        </PrivateLayout>
    )
};

export default PurchaseDetails