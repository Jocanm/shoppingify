import React from 'react'
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { PrivateLayout } from '../../layout';
import * as S from '../../shared/styles/pages/ShoppingDetailsPage.styles';
import { ArrowRightAlt } from '@mui/icons-material';
import { ShoppingDetailsBox } from '../../components/pages/shoppingDetails';
import { useGetShoppingDetailsQuery } from '../../config/redux';
import { VanillaLoader } from '../../components/ui/loders';

const PurchaseDetails = () => {

    const { id } = useRouter().query as { id: string }
    const router = useRouter()

    const { data, isLoading } = useGetShoppingDetailsQuery(id)

    const onBack = () => {
        router.back()
    }

    if (isLoading || !data) {
        return <VanillaLoader />
    }

    return (
        <S.ShoppingDetailsViewWrapper>

            <S.ShoppingDetailsBackButton onClick={onBack}>
                <ArrowRightAlt />
                back
            </S.ShoppingDetailsBackButton>

            <ShoppingDetailsBox
                {...data}
            />

        </S.ShoppingDetailsViewWrapper>
    )
}

PurchaseDetails.getLayout = (page: ReactElement, other: any) => {

    const { purchaseName } = (page as { [key: string]: any })?._owner?.memoizedProps?.router?.query || {}

    const title = `Shoppingify | ${purchaseName || 'Shopping List Details'}`

    const description = purchaseName ? 'Details of your shopping list' : `Details of your shopping list - ${purchaseName}`

    return (
        <PrivateLayout
            title={title}
            description={description}
        >
            {page}
        </PrivateLayout>
    )
};

PurchaseDetails.auth = true;

export default PurchaseDetails