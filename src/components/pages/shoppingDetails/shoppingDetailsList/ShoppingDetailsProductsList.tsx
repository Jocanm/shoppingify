import React from 'react'
import { IPurchasedProductV2 } from '../../../../shared/models'
import * as S from './ShoppingDetailsList.styles'
import { products } from '../../../../shared/database/seed_data';
import { ShoppingDetailsProductItem } from './ShoppingDetailsProductItem';

interface Props {
    purchasedProducts: IPurchasedProductV2[]
}

export const ShoppingDetailsProductsList = ({ purchasedProducts }: Props) => {
    return (
        <S.ShoppingDetailsProducListStyles>
            {
                purchasedProducts.map((purchasedProduct,index) => (
                    <ShoppingDetailsProductItem
                        key={purchasedProduct.id}
                        purchasedProduct={purchasedProduct}
                        position={index}
                    />
                ))
            }
        </S.ShoppingDetailsProducListStyles>
    )
}
