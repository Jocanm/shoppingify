import { Search } from '@mui/icons-material'
import React from 'react'
import * as S from './Header.styles'

export const Header = () => {
    return (
        <S.HeaderContainer>

            <S.HeaderTitle>
                <span>Shoppingify </span>
                allows you take your shopping list wherever you go
            </S.HeaderTitle>

            <S.InputContainer>
                <input
                    type="text"
                    placeholder="search item"
                />
                <Search/>
            </S.InputContainer>

        </S.HeaderContainer>
    )
}
