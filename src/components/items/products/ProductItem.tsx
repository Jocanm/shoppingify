import React from 'react'
import * as S from './ProductsList.styles'
import { IProduct } from '../../../shared/models';
import { Add } from '@mui/icons-material';

export const ProductItem = ({ name }: IProduct) => {
    return (
        <S.ProductItemBox>
            <span>{name}</span>
            <button>
                <Add />
            </button>
        </S.ProductItemBox>
    )
}
