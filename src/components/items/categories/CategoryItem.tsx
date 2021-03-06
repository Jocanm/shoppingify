import React from 'react'
import { ICategory } from '../../../shared/models'
import { ProductsList } from '../products'
import * as S from './CategoriesList.styles'


export const CategoryItem = ({ name, products }: ICategory) => {

    const numberOfItems = products.length

    if (numberOfItems === 0) {
        return null
    }

    return (
        <S.CategoryItemBox>
            <h2>{name.toLowerCase()} ({numberOfItems})</h2>
            <ProductsList
                products={products}
            />
        </S.CategoryItemBox>
    )
}
