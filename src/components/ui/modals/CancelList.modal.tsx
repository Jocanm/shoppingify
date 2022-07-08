import { Dialog } from '@mui/material';
import { setCancelListModal, useAppDispatch, useAppSelector, useUpdatePurchaseStateMutation } from '../../../config/redux';
import { Button } from '../buttons';
import * as S from './modals.styles';

export const CancelListModal = () => {

    const dispatch = useAppDispatch()
    const { cancelListModal } = useAppSelector().ui

    const [updateState, { isLoading }] = useUpdatePurchaseStateMutation()

    const closeModal = () => {
        dispatch(setCancelListModal(false))
    }

    const onCancelList = () => {
        updateState('cancelled')
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
