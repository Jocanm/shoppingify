import { ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import * as MU from '@mui/material'
import * as S from './Cart.styles'

export const Cart = () => {
    return (
        <S.CartWrapper>
            <ShoppingCartOutlined/>
            <S.NumberOfItems>
                9
            </S.NumberOfItems>
        </S.CartWrapper>
    )
}
