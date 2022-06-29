import React from 'react'
import { IPurchase } from '../../../../shared/models'
import { PurchaseItem } from './PurchaseItem'
import * as S from './PurchasesList.styles'

interface Props {
    purchases: IPurchase[]
}

export const PurchasesList = ({ purchases }: Props) => {

    return (
        <S.PurchasesListContainer>
            {
                purchases.map(purchase => (
                    <PurchaseItem
                        key={purchase.id}
                        purchase={purchase}
                    />
                ))
            }
        </S.PurchasesListContainer>
    )
}
