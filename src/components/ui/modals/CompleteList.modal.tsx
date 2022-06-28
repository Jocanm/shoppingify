import React, { useState } from 'react'
import { setCompleteListModal, startCompleteShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import { Dialog } from '@mui/material';
import * as S from './modals.styles';
import { Button } from '../buttons';

export const CompleteListModal = () => {

    const [isLoading, setisLoading] = useState(false)
    const { completeListModal } = useAppSelector().ui
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(setCompleteListModal(false))
    }

    const onComplete = async() => {
        setisLoading(true)
        await dispatch(startCompleteShoppingList())
        setisLoading(false)
    }

    return (
        <Dialog
            open={completeListModal}
            onClose={handleClose}
        >
            <S.ModalWrapper>
                <h2>
                    {"You didn't buy all products in list. Are you sure that you want to complete this list?"}
                </h2>
                <S.ButtonContainer>

                    <Button
                        disabled={isLoading}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        bgColor="#EB5757"
                        onClick={onComplete}
                        isLoading={isLoading}
                    >
                        Yes
                    </Button>

                </S.ButtonContainer>
            </S.ModalWrapper>
        </Dialog>
    )
}
