import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useAppSelector } from '../../../config/redux'
import { Box } from '../../globalComponents'
import { Header } from '../../header'
import * as S from './CategoriesList.styles'
import { CategoryItem } from './CategoryItem'

export const CategoriesList = () => {

    const { categories } = useAppSelector().categories

    return (
        <S.CategoryListContainer>

            <Header />

            <S.CategoryListBox>
                {
                    categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            {...category}
                        />
                    ))
                }
            </S.CategoryListBox>

        </S.CategoryListContainer>
    )
}
