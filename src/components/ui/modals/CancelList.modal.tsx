import React, { useState } from 'react'
import { Dialog } from '@mui/material';
import { setCancelListModal, startCancelShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux';
import * as S from './modals.styles';
import { Button } from '../buttons';

export const CancelListModal = () => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const { cancelListModal } = useAppSelector().ui

    const closeModal = () => {
        dispatch(setCancelListModal(false))
    }

    const onCancelList = async() => {
        setIsLoading(true)
        await dispatch(startCancelShoppingList())
        setIsLoading(false)
    }

    return (
        <Dialog
            open={cancelListModal}
            onClose={closeModal}
        >
            <S.ModalWrapper>
                <h2>Are you sure that you want to cancel this list?</h2>
                <S.ButtonContainer>
                    <Button
                        onClick={closeModal} disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        bgColor="#EB5757" isLoading={isLoading} onClick={onCancelList}
                    >
                        Yes
                    </Button>
                </S.ButtonContainer>
            </S.ModalWrapper>
        </Dialog>
    )
}
