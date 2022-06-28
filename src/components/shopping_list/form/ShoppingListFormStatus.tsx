import React from 'react'
import { Button } from '../../ui/buttons'
import * as S from '../ShoppingList.styles'

export const ShoppingListFormStatus = () => {
    return (
        <S.ActivePurchaseOptions>
            <Button type="button">Cancel</Button>
            <Button type="button">Complete</Button>
        </S.ActivePurchaseOptions>
    )
}
