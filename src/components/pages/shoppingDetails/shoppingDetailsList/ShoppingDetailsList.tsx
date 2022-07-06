import React, { useMemo } from 'react'
import { IPurchase } from '../../../../shared/models'
import { ShoppingDetailsCategory } from './ShoppingDetailsCategory'
import * as S from './ShoppingDetailsList.styles'

export const ShoppingDetailsList = ({ products }: IPurchase) => {

    const allCategories = useMemo(() => {

        const categories = products.map(({ product }) => product.category.name)

        //@ts-ignore
        return [...new Set(categories)]

    }, [products])

    return (
        <S.ShoppingDetailsListWrapper>
            {
                allCategories.map(category => (
                    <ShoppingDetailsCategory
                        key={category}
                        categoryName={category}
                    />
                ))
            }
        </S.ShoppingDetailsListWrapper>
    )
}
