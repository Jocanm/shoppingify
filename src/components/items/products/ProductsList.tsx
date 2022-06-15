import React, { useMemo } from 'react'
import { IProduct } from '../../../shared/models';
import * as S from './ProductsList.styles';
import { ProductItem } from './ProductItem';
import { nanoid } from '@reduxjs/toolkit';
import { useFilterContext } from '../../../shared/context';

interface Props {
    products: IProduct[]
}

export const ProductsList = ({ products }: Props) => {

    const { productName } = useFilterContext()

    const fiteredProducts = useMemo(() => {

        if (!productName) {
            return products
        }

        const newProducts = products.filter(({ name }) => 
            name.toLowerCase().includes(productName.toLowerCase())
        )

        return newProducts

    }, [productName, products])

    return (
        <S.ProductListBox>
            {
                fiteredProducts.map(product => (
                    <ProductItem
                        key={product.id}
                        {...product}
                    />
                ))
            }
        </S.ProductListBox>
    )
}
