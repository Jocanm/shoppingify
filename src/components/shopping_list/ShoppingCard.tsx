import { useState } from 'react';
import { useAppSelector } from '../../config/redux';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';
import { NewProductCard } from '../materials';

export const ShoppingCard = () => {

    const [showNewProduct, setShowNewProduct] = useState(false)
    const { showShoppingList } = useAppSelector().ui

    const toggleShowNewProduct = () => {
        setShowNewProduct(!showNewProduct)
    }

    return (
        <S.ShoppingListContainer
            showShoppingList={showShoppingList}
        >

            {
                !showNewProduct
                    ? <ProductsListContent toggleShowNewProduct={toggleShowNewProduct} />
                    : <NewProductCard toggleShowNewProduct={toggleShowNewProduct}/>
            }

        </S.ShoppingListContainer>
    )
}
