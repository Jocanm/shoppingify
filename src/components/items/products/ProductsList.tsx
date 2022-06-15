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
                //TODO: use only one array
                [...products].map(product => (
                // [...products].slice(0,3).map(product => (
                    <ProductItem
                        //TODO: add key to ProductItem
                        // key={product.id}
                        key={nanoid()}
                        {...product}
                    />
                ))
            }
        </S.ProductListBox>
    )
}
