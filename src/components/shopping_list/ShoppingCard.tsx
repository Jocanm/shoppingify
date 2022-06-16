/* eslint-disable @next/next/no-img-element */
import React from 'react'
import * as S from './ShoppingList.styles'
import { ShoppingImage, ShoppingProductsList } from './';
import { Button } from '../ui/buttons';
import { useAppSelector } from '../../config/redux';
import { Box } from '../globalComponents';

export const ShoppingCard = () => {

    const { cartTotal } = useAppSelector().cart
    const { showShoppingList } = useAppSelector().ui

    return (
        <S.ShoppingListContainer
            showShoppingList={showShoppingList}
        >

            <div className='img-container'>
                <ShoppingImage />
            </div>

            {
                cartTotal
                    ? <ShoppingProductsList />
                    : <EmptyCart />
            }

            <S.ShoppingNameBox>
                <input
                    placeholder='Enter a name'
                />
                <Button>
                    Save
                </Button>
            </S.ShoppingNameBox>

        </S.ShoppingListContainer>
    )
}


const EmptyCart = () => (
    <Box flex flexColumn alignCenter fontSize='1.4rem' appear>
        <span style={{ fontWeight: "600" }}>No Items</span>
        <img
            src="/assets/cart.svg"
            alt="cart"
        />
    </Box>
)

