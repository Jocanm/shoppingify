/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../config/redux'
import { Box } from '../globalComponents'
import { Button } from '../ui/buttons'
import { ShoppedProductItem } from './ShoppedProductItem'
import * as S from './ShoppingList.styles'
import { Create, ShoppingCart } from '@mui/icons-material';
import { Tooltip } from '@mui/material'
import { useSelector } from 'react-redux';

interface Props {
    toggleEditMode: () => void
}

export const ShoppingProductsList = ({ toggleEditMode }: Props) => {

    // const { cart } = useAppSelector().cart
    // const { activePurchase } = useAppSelector().shopping
    // const { editShoppingListMode } = useAppSelector().ui

    const cart = useSelector((state: RootState) => state.cart.cart);
    const activePurchase = useSelector((state: RootState) => state.shopping.activePurchase);
    const editShoppingListMode = useSelector((state: RootState) => state.ui.editShoppingListMode);

    return (
        <S.ShoppingProductsListBox>

            <Box as="p" flex alignCenter justifyBetween>
                <div>Shopping List</div>
                {
                    activePurchase &&
                    <Tooltip
                        title={editShoppingListMode ? "complete list" : "edit list"}
                        placement="bottom"
                        arrow
                        enterDelay={300}
                    >
                        <Button
                            Icon={editShoppingListMode ? <ShoppingCart /> : <Create />}
                            bgColor="transparent"
                            iconColor='#34333A'
                            onClick={toggleEditMode}
                            p="0"
                        />
                    </Tooltip>
                }
            </Box>

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