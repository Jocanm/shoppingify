import React from 'react'
import { IProduct } from '../../../shared/models';
import * as S from './ProductsList.styles';
import { ProductItem } from './ProductItem';
import { nanoid } from '@reduxjs/toolkit';

interface Props {
    products: IProduct[]
}

export const ProductsList = ({ products }: Props) => {
    return (
        <S.ProductListBox>
            {
                products.map(product => (
                    <ProductItem
                        key={product.id}
                        {...product}
                    />
                ))
            }
        </S.ProductListBox>
    )
}
