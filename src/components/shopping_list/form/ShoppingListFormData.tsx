import React from 'react'
import { useAppSelector } from '../../../config/redux';
import { Button } from '../../ui/buttons';
import { MyInput } from '../../ui/inputs';
import * as S from '../ShoppingList.styles';

export const ShoppingListFormData = () => {

    const { activePurchase } = useAppSelector().shopping

    return (
        <S.ShoppingNameBox>
            <MyInput
                name='name'
                placeholder='Enter a name'
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
