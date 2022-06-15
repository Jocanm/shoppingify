/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useAppSelector } from '../../config/redux'
import { Box } from '../globalComponents'
import { ShoppedProductItem } from './ShoppedProductItem'
import * as S from './ShoppingList.styles'

export const ShoppingProductsList = () => {

    const { cart } = useAppSelector().cart

    return (
        <S.ShoppingProductsListBox>

            <p>Shopping List</p>

            {
                Object.values(cart).map((item) => (
                    <ShoppedProductItem
                        key={item.product.id}
                        {...item}
                    />
                ))
            }

        </S.ShoppingProductsListBox>
    )
}