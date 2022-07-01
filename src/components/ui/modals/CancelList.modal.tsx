import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { setCancelListModal, startUpdateShoppingListState, useAppDispatch, useAppSelector } from '../../../config/redux';
import { Button } from '../buttons';
import * as S from './modals.styles';

export const CancelListModal = () => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const { cancelListModal } = useAppSelector().ui

    const router = useRouter()

    const closeModal = () => {
        dispatch(setCancelListModal(false))
    }

    const onCancelList = async () => {
        setIsLoading(true)
        await dispatch(startUpdateShoppingListState('cancelled'))
        setIsLoading(false)
        // if (!(['/', '/profile'].includes(router.asPath))) {
        //     router.push('/')
        // }
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
