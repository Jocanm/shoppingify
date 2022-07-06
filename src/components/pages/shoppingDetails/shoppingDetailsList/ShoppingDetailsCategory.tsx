import React from 'react'
import { useGetShoppingDetailsQuery } from '../../../../config/redux'
import { useRouter } from 'next/router';
import * as S from './ShoppingDetailsList.styles';
import { ShoppingDetailsProductsList } from './ShoppingDetailsProductsList';
import { products } from '../../../../shared/database/seed_data';

interface Props {
    categoryName: string
}

export const ShoppingDetailsCategory = ({ categoryName }: Props) => {

    const { id } = useRouter().query as { id: string }

    const { products } = useGetShoppingDetailsQuery(id, {
        selectFromResult: ({ data }) => {
            const { products = [] } = data || {}

            const productsToShow = products.filter(({ product }) => product.category.name === categoryName)

            return { products: productsToShow }
        }
    })

    return (
        <S.ShoppingDetailsCategorieList>
            <h2>{categoryName.toLowerCase()}</h2>
            <ShoppingDetailsProductsList purchasedProducts={products} />
        </S.ShoppingDetailsCategorieList>
    )
}
