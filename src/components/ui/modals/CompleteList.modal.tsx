import { Dialog } from '@mui/material';
import { setCompleteListModal, useAppDispatch, useAppSelector, useUpdatePurchaseStateMutation } from '../../../config/redux';
import { Button } from '../buttons';
import * as S from './modals.styles';

export const CompleteListModal = () => {

    const { completeListModal } = useAppSelector().ui
    const dispatch = useAppDispatch()

    const [updateState, { isLoading }] = useUpdatePurchaseStateMutation()

    const handleClose = () => {
        dispatch(setCompleteListModal(false))
    }

    const onComplete = () => {
        updateState('completed')
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
