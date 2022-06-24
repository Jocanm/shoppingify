import { ShoppingCartOutlined } from '@mui/icons-material'
import { setActiveProduct, toggleShowShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import * as S from './Cart.styles'
import React from 'react';

export const Cart = () => {

    const { cartTotal } = useAppSelector().cart
    const dispatch = useAppDispatch()

    const onToggleList = () => {
        dispatch(toggleShowShoppingList())
        dispatch(setActiveProduct(undefined))
    }

    return (
        <S.CartWrapper
            onClick={onToggleList}
        >
            <ShoppingCartOutlined />
            {
                !!cartTotal &&
                (
                    <S.NumberOfItems>
                        {
                            cartTotal > 9 ? '+9' : cartTotal
                        }
                    </S.NumberOfItems>
                )
            }
        </S.CartWrapper>
    )
}