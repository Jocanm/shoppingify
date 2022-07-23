import { motion } from 'framer-motion';
import { RootState, setShowProductForm, useAppDispatch, useAppSelector } from '../../config/redux';
import { ProductDescription } from '../items';
import { NewProductCard } from '../materials';
import { ProductsListContent } from './';
import * as S from './ShoppingList.styles';
import { useSelector } from 'react-redux';

export const ShoppingCard = () => {

    // const { showShoppingList, showProductDetails, showProductForm } = useAppSelector().ui
    const showShoppingList = useSelector((state: RootState) => state.ui.showShoppingList)
    const showProductDetails = useSelector((state: RootState) => state.ui.showProductDetails)
    const showProductForm = useSelector((state: RootState) => state.ui.showProductForm)

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
            <S.ShoppingListContainer>
                <Content
                    toggleShowNewProduct={toggleShowNewProduct}
                />

            </S.ShoppingListContainer>

            <S.SmallViewShoppingListContainer
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