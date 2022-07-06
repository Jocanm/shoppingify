import { useState } from 'react';
import { useAppSelector } from '../../config/redux';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';
import { NewProductCard } from '../materials';
import { ProductDescription } from '../items';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    initial: { x: '100%' },
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
                transition={{ duration: 0.3 }}
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
            <ProductDescription setShowNewProduct={props.setShowNewProduct}/>
        </>
    )
}