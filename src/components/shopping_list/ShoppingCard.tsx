import { motion } from 'framer-motion';
import { setShowProductForm, useAppDispatch, useAppSelector } from '../../config/redux';
import { ProductDescription } from '../items';
import { NewProductCard } from '../materials';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';

export const ShoppingCard = () => {

    const { showShoppingList, showProductDetails, showProductForm } = useAppSelector().ui

    const dispatch = useAppDispatch()

    const toggleShowNewProduct = () => {
        dispatch(setShowProductForm(!showProductForm))
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
                    toggleShowNewProduct={toggleShowNewProduct}
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
                    toggleShowNewProduct={toggleShowNewProduct}
                />

            </S.SmallViewShoppingListContainer>
        </>
    )
}

interface Props {
    toggleShowNewProduct: () => void
}

export const Content = (props: Props) => {

    return (
        <>
            <NewProductCard toggleShowNewProduct={props.toggleShowNewProduct} />
            <ProductsListContent toggleShowNewProduct={props.toggleShowNewProduct} />
            <ProductDescription />
        </>
    )
}