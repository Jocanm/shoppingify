import { ShoppingCartOutlined } from '@mui/icons-material'
import { RootState, setActiveProduct, toggleShowShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import * as S from './Cart.styles'
import React from 'react';
import { closeProductDetails } from '../../../config/redux/actions';
import { useSelector } from 'react-redux';

export const Cart = () => {

    // const { cartTotal } = useAppSelector().cart
    // const { activeProduct } = useAppSelector().categories

    const cartTotal = useSelector((state: RootState) => state.cart.cartTotal)
    const activeProduct = useSelector((state: RootState) => state.categories.activeProduct)
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
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
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