import React from 'react'
import { Dialog } from '@mui/material';
import { setCancelListModal, useAppDispatch, useAppSelector } from '../../../config/redux';
import * as S from './modals.styles';
import { Button } from '../buttons';

export const CancelListModal = () => {

    const dispatch = useAppDispatch()
    const { cancelListModal } = useAppSelector().ui

    const closeModal = () => {
        dispatch(setCancelListModal(false))
    }

    return (
        <Dialog
            open={cancelListModal}
            onClose={closeModal}
        >
            <S.ModalWrapper>
                <h2>Are you sure that you want to cancel this list?</h2>
                <S.ButtonContainer>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button bgColor="#EB5757">Yes</Button>
                </S.ButtonContainer>
            </S.ModalWrapper>
        </Dialog>
    )
}
