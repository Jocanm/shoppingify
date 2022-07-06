import { useState } from 'react';
import { useAppSelector } from '../../config/redux';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';
import { NewProductCard } from '../materials';
import { ProductDescription } from '../items';
import { motion, AnimatePresence } from 'framer-motion';

export const ShoppingCard = () => {

    const [showNewProduct, setShowNewProduct] = useState(false)
    const { showShoppingList, showProductDetails } = useAppSelector().ui

    const toggleShowNewProduct = () => {
        setShowNewProduct(!showNewProduct)
    }

    const variants = {
        initial: { x: '110%' },
        animate: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'linear',
                delay: showProductDetails ? 0.3 : 0

            }
        },
        exit: {
            x: '110%',
            transition: {
                duration: 0.3,
            }
        },
    }

    return (
        <>
            <S.ShoppingListContainer
                showShoppingList={showShoppingList}
            >
                <Content
                    showNewProduct={showNewProduct}
                    toggleShowNewProduct={toggleShowNewProduct}
                    setShowNewProduct={setShowNewProduct}
                />

            </S.ShoppingListContainer>

            <S.SmallViewShoppingListContainer
                showShoppingList={showShoppingList}
                as={motion.div}
                variants={variants}
                animate={showShoppingList ? 'animate' : 'exit'}
                initial='initial'
            >

                <Content
                    showNewProduct={showNewProduct}
                    toggleShowNewProduct={toggleShowNewProduct}
                    setShowNewProduct={setShowNewProduct}
                />

            </S.SmallViewShoppingListContainer>
        </>
    )
}

interface Props {
    toggleShowNewProduct: () => void
    setShowNewProduct: (showNewProduct: boolean) => void;
    showNewProduct: boolean;
}

export const Content = (props: Props) => {

    return (
        <>
            {
                !props.showNewProduct
                    ? <ProductsListContent toggleShowNewProduct={props.toggleShowNewProduct} />
                    : <NewProductCard toggleShowNewProduct={props.toggleShowNewProduct} />
            }
            <ProductDescription setShowNewProduct={props.setShowNewProduct} />
        </>
    )
}