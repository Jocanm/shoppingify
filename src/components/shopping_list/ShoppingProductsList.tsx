/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useAppSelector } from '../../config/redux'
import { Box } from '../globalComponents'
import { ShoppedProductItem } from './ShoppedProductItem'
import * as S from './ShoppingList.styles'

export const ShoppingProductsList = () => {

    const { cart } = useAppSelector().cart
    const { ActivePurchase } = useAppSelector().shopping

    return (
        <S.ShoppingProductsListBox>

            <p>Shopping List {ActivePurchase && <span> - {ActivePurchase.purchase.name}</span>}</p>

            {/* TODO: separar lista visualmente por categorias tambien */}

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