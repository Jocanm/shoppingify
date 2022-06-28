import React from 'react'
import { setCancelListModal, useAppDispatch } from '../../../config/redux'
import { Button } from '../../ui/buttons'
import { CancelListModal } from '../../ui/modals'
import * as S from '../ShoppingList.styles'

export const ShoppingListFormStatus = () => {

    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(setCancelListModal(true))
    }

    return (
        <S.ActivePurchaseOptions>
            <Button type="button" onClick={openModal}>Cancel</Button>
            <Button type="button">Complete</Button>
            <CancelListModal />
        </S.ActivePurchaseOptions>
    )
}
