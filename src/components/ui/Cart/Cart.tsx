import { ShoppingCartOutlined } from '@mui/icons-material'
import { setActiveProduct, toggleShowShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import * as S from './Cart.styles'
import React from 'react';
import { closeProductDetails } from '../../../config/redux/actions';

export const Cart = () => {

    const { cartTotal } = useAppSelector().cart
    const { activeProduct } = useAppSelector().categories
    const dispatch = useAppDispatch()

    const onToggleList = () => {
        // activeProduct
        //     ? dispatch(setActiveProduct(undefined))
        //     : dispatch(toggleShowShoppingList())
        activeProduct
            ? closeProductDetails()
            : dispatch(toggleShowShoppingList())
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