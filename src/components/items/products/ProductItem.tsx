import React from 'react'
import * as S from './ProductsList.styles'
import { IProduct } from '../../../shared/models';

export const ProductItem = ({ name }: IProduct) => {
    return (
        <S.ProductItemBox>
            {name}
        </S.ProductItemBox>
    )
}
