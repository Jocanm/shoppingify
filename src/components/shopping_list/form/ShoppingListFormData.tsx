import React from 'react'
import { RootState, useAppSelector } from '../../../config/redux';
import { Button } from '../../ui/buttons';
import { MyInput } from '../../ui/inputs';
import * as S from '../ShoppingList.styles';
import { useSelector } from 'react-redux';

export const ShoppingListFormData = () => {

    // const { activePurchase } = useAppSelector().shopping
    const activePurchase = useSelector((state: RootState) => state.shopping.activePurchase)

    return (
        <S.ShoppingNameBox>
            <MyInput
                name='name'
                placeholder='Enter a name'
                autoComplete='off'
            />
            <Button type="submit">
                {
                    activePurchase
                        ? 'Update'
                        : 'Save'
                }
            </Button>
        </S.ShoppingNameBox>
    )
}
