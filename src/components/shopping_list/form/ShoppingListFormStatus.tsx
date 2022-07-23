import { RootState, setCancelListModal, setCompleteListModal, useAppDispatch, useAppSelector, useUpdatePurchaseStateMutation } from '../../../config/redux'
import { Button } from '../../ui/buttons'
import { CancelListModal, CompleteListModal } from '../../ui/modals'
import * as S from '../ShoppingList.styles'
import { useSelector } from 'react-redux';
export const ShoppingListFormStatus = () => {

    const dispatch = useAppDispatch()
    // const { cart } = useAppSelector().cart
    // const { activePurchase } = useAppSelector().shopping

    const cart = useSelector((state: RootState) => state.cart.cart)
    const activePurchase = useSelector((state: RootState) => state.shopping.activePurchase)

    const [updateState, { isLoading }] = useUpdatePurchaseStateMutation()

    const openModal = () => {
        dispatch(setCancelListModal(true))
    }

    const onComplete = async () => {

        const isAllChecked = Object.values(cart).every(item => item.done)

        if (isAllChecked) {
            const { purchase } = activePurchase || {}

            updateState({
                state: 'completed',
                id: purchase!.id,
            })
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
