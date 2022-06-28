import React, { useState } from 'react'
import { setCancelListModal, setCompleteListModal, startCompleteShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import { Button } from '../../ui/buttons'
import { CancelListModal, CompleteListModal } from '../../ui/modals'
import * as S from '../ShoppingList.styles'
import { useRouter } from 'next/router';

export const ShoppingListFormStatus = () => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const { cart } = useAppSelector().cart

    const router = useRouter()

    const openModal = () => {
        dispatch(setCancelListModal(true))
    }

    const onComplete = async () => {
        const isAllChecked = Object.values(cart).every(item => item.done)

        if (isAllChecked) {
            setIsLoading(true)
            await dispatch(startCompleteShoppingList())
            setIsLoading(false)
            if(!(['/','/profile'].includes(router.asPath))) {
                router.push('/')
            }
        } else {
            dispatch(setCompleteListModal(true))
        }
    }

    return (
        <S.ActivePurchaseOptions>
            <Button type="button" onClick={openModal} disabled={isLoading}>Cancel</Button>
            <Button
                type="button"
                width='7.5rem'
                height='3.25rem'
                isLoading={isLoading}
                onClick={onComplete}
            >
                Complete
            </Button>

            {/* --------------------- */}
            <CancelListModal />
            <CompleteListModal />

        </S.ActivePurchaseOptions>
    )
}
