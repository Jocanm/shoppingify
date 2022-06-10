import { ShoppingCartOutlined } from '@mui/icons-material'
import { useAppSelector } from '../../../config/redux'
import * as S from './Cart.styles'
import React from 'react';

export const Cart = () => {

    const { cartTotal } = useAppSelector().cart

    return (
        <S.CartWrapper>
            <ShoppingCartOutlined />
            <S.NumberOfItems>
                {cartTotal}
            </S.NumberOfItems>
        </S.CartWrapper>
    )
}