import React from 'react'
import * as S from './ProductsList.styles'
import { IProduct } from '../../../shared/models';
import { Add } from '@mui/icons-material';
import { addToCart, useAppDispatch } from '../../../config/redux';

export const ProductItem = (product: IProduct) => {

    const dispatch = useAppDispatch()

    const onAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <S.ProductItemBox>

            <span>{product.name}</span>

            <button
                onClick={onAddToCart}
            >
                <Add />
            </button>
            
        </S.ProductItemBox>
    )
}
