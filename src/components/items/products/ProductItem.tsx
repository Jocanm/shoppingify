import React, { useMemo } from 'react'
import * as S from './ProductsList.styles'
import { IProduct } from '../../../shared/models';
import { Add } from '@mui/icons-material';
import { addToCart, setActiveProduct, toggleShowShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux';

export const ProductItem = (product: IProduct) => {

    const dispatch = useAppDispatch()
    const { cart } = useAppSelector().cart

    const onAddToCart = () => {
        dispatch(addToCart(product))
    }

    const onSelectProduct = () => {
        dispatch(setActiveProduct(product))
        dispatch(toggleShowShoppingList())
    }

    const isInCart = useMemo(() => {

        return Object.keys(cart).includes(product.id)

    }, [product,cart])

    return (
        <S.ProductItemBox
            isInCart={isInCart}
        >

            <span onClick={onSelectProduct}>{product.name}</span>

            <button
                onClick={onAddToCart}
            >
                <Add />
            </button>

        </S.ProductItemBox>
    )
}
