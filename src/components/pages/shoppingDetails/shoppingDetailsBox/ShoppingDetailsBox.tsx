import React from 'react'
import { IPurchase } from '../../../../shared/models'
import { Box } from '../../../globalComponents'
import * as S from './ShoppingDetailsBox.styles'
import { EventNote } from '@mui/icons-material';
import { getDate } from '../../../../shared/helpers';

export const ShoppingDetailsBox = ({ name, state, updatedAt }: IPurchase) => {

    const customDate = getDate(updatedAt)

    return (
        <S.DetailsBoxContainer>

            <Box flex alignCenter gap='1rem'>
                <h1>{name.toLowerCase()}</h1>
                <S.PurchaseState color={state === 'cancelled' ? '#EB5757' : '#56CCF2'}>
                    {state}
                </S.PurchaseState>
            </Box>
            <span className='purchase-date'>
                <EventNote />
                {customDate}
            </span>

        </S.DetailsBoxContainer>
    )
}
