import { Check } from '@mui/icons-material'
import React from 'react'
import { RootState, startSetDoneStatus, useAppDispatch, useAppSelector } from '../../../config/redux'
import * as S from './CustomCheck.styles'
import { IProduct } from '../../../shared/models';
import { useSelector } from 'react-redux';

interface Props {
    done: boolean
    product: IProduct
    quantity: number
}

export const CustomCheck = ({ done, quantity, product: { id } }: Props) => {

    // const { editShoppingListMode } = useAppSelector().ui
    // const { activePurchase } = useAppSelector().shopping

    const editShoppingListMode = useSelector((state: RootState) => state.ui.editShoppingListMode)
    const activePurchase = useSelector((state: RootState) => state.shopping.activePurchase)

    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch(startSetDoneStatus({
            id,
            done: !done,
            quantity
        }))
    }

    if (!(activePurchase && !editShoppingListMode)) return null

    return (
        <S.CheckWrapper done={done} onClick={onToggle}>
            <Check />
        </S.CheckWrapper>
    )
}
