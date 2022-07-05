import { useState } from 'react';
import { useAppSelector } from '../../config/redux';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';
import { NewProductCard } from '../materials';
import { ProductDescription } from '../items';
import { motion } from 'framer-motion';

const variants = {
    animate: { x: 0 },
    exit: { x: '100%' },
}

export const ShoppingCard = () => {

    const [showNewProduct, setShowNewProduct] = useState(false)
    const { showShoppingList } = useAppSelector().ui
    const { activeProduct } = useAppSelector().categories

    const toggleShowNewProduct = () => {
        setShowNewProduct(!showNewProduct)
    }

    return (
        <>
            <S.ShoppingListContainer
                showShoppingList={showShoppingList}
            >
                {
                    activeProduct
                        ? (
                            <ProductDescription
                                setShowNewProduct={setShowNewProduct}
                            />
                        )
                        : !showNewProduct
                            ? <ProductsListContent toggleShowNewProduct={toggleShowNewProduct} />
                            : <NewProductCard toggleShowNewProduct={toggleShowNewProduct} />
                }

            </S.ShoppingListContainer>

            <S.SmallViewShoppingListContainer
                showShoppingList={showShoppingList}
                as={motion.div}
                variants={variants}
                animate={showShoppingList ? 'animate' : 'exit'}
                transition={{ duration: 0.5 }}
            >
                {
                    activeProduct
                        ? (
                            <ProductDescription
                                setShowNewProduct={setShowNewProduct}
                            />
                        )
                        : !showNewProduct
                            ? <ProductsListContent toggleShowNewProduct={toggleShowNewProduct} />
                            : <NewProductCard toggleShowNewProduct={toggleShowNewProduct} />
                }

            </S.SmallViewShoppingListContainer>
        </>
    )
}
