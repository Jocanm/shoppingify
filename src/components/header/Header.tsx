import { Search } from '@mui/icons-material'
import React from 'react'
import { useAppSelector } from '../../config/redux'
import { useFilterContext } from '../../shared/context'
import * as S from './Header.styles'

export const Header = () => {

    const { setProductName } = useFilterContext()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value.trim())
    }

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
                    onChange={handleChange}
                />
                <Search />
            </S.InputContainer>

        </S.HeaderContainer>
    )
}
