import { ArrowForwardIos, EventNote } from '@mui/icons-material'
import React from 'react'
import { IPurchase } from '../../../../shared/models'
import { Box } from '../../../globalComponents'
import * as S from './PurchasesList.styles'
import { getDate } from '../../../../shared/helpers';

interface Props {
    purchase: IPurchase
}

export const PurchaseItem = ({ purchase }: Props) => {

    const customDate = getDate(purchase.updatedAt)

    return (
        <S.PurchasesListItem>
            <span>{purchase.name}</span>
            <S.PurchaseOptions>
                <span className='purchase-date'>
                    <EventNote />
                    {customDate}
                </span>
                <S.PurchaseState
                    color={purchase.state === 'cancelled' ? '#EB5757' : '#56CCF2'}
                >
                    {purchase.state}
                </S.PurchaseState>
                <ArrowForwardIos />
            </S.PurchaseOptions>
        </S.PurchasesListItem>
    )
}