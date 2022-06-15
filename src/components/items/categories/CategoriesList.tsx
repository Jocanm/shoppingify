import React from 'react'
import { useAppSelector } from '../../../config/redux'
import { Box } from '../../globalComponents'
import { Header } from '../../header'
import * as S from './CategoriesList.styles'

export const CategoriesList = () => {

    const { categories } = useAppSelector().categories

    return (
        <S.CategoryListContainer>
            <Header />
            <pre>
                {JSON.stringify(categories, null, 4)}
            </pre>
        </S.CategoryListContainer>
    )
}
