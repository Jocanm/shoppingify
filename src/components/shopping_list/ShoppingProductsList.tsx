/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useAppSelector } from '../../config/redux'
import { Box } from '../globalComponents'
import { Button } from '../ui/buttons'
import { ShoppedProductItem } from './ShoppedProductItem'
import * as S from './ShoppingList.styles'
import { Create, ShoppingCart } from '@mui/icons-material';
import { Tooltip } from '@mui/material'

export const ShoppingProductsList = () => {

    const { cart } = useAppSelector().cart
    const { activePurchase } = useAppSelector().shopping

    const [isEditMode, setIsEditMode] = useState(false)

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }

    return (
        <S.ShoppingProductsListBox>

            <Box as="p" flex alignCenter justifyBetween>
                <div>Shopping List</div>
                {
                    activePurchase &&
                    <Tooltip
                        title={isEditMode ? "complete list" : "edit list"}
                        placement="bottom"
                        arrow
                        enterDelay={300}
                    >
                        <Button
                            Icon={isEditMode ? <ShoppingCart /> : <Create />}
                            bgColor="transparent"
                            iconColor='#34333A'
                            onClick={toggleEditMode}
                            p="0"
                        />
                    </Tooltip>
                }
            </Box>

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