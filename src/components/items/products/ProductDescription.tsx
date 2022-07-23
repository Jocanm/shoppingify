/* eslint-disable @next/next/no-img-element */
import { ArrowRightAlt } from '@mui/icons-material'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { addToCart, RootState, setDeleteProductModal, setShowProductForm, setShowShopingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import { closeProductDetails } from '../../../config/redux/actions'
import { useIsLarge } from '../../../shared/hooks'
import { IProduct } from '../../../shared/models'
import { Button } from '../../ui/buttons'
import { DeleteProductModal } from '../../ui/modals'
import * as S from './ProductsList.styles'
import { useSelector } from 'react-redux';

export const ProductDescription = () => {

    // const { showProductDetails } = useAppSelector().ui
    const showProductDetails = useSelector((state: RootState) => state.ui.showProductDetails)

    return (
        <AnimatePresence>
            {
                showProductDetails &&
                <Content />
            }
        </AnimatePresence>
    )
}

const Content = () => {

    const dispatch = useAppDispatch()
    // const { activeProduct } = useAppSelector().categories
    const activeProduct = useSelector((state:RootState) => state.categories.activeProduct)
    const isLarge = useIsLarge()

    const cleanActiveProduct = () => {
        dispatch(setShowShopingList(false))
        closeProductDetails()
    }

    const onAddToCart = () => {
        dispatch(addToCart(activeProduct as IProduct))
        closeProductDetails()
        dispatch(setShowProductForm(false))
    }

    const onDeleteProduct = () => {
        dispatch(setDeleteProductModal(true))
    }

    const variants = {
        initial: { x: '100%' },
        animate: {
            x: 0,
            transition: {
                duration: 0.3,
            }
        },
        exit: {
            x: '100%',
            transition: {
                delay: isLarge ? 0.3 : 0,
                duration: 0.3,
            },
        },
    }

    return (
        <S.ProductDescriptionBox
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            key='product-description'
        >

            <S.BackButton onClick={cleanActiveProduct}>
                <ArrowRightAlt />
                back
            </S.BackButton>

            {
                activeProduct?.image &&
                <S.ProductImage
                    src={activeProduct.image}
                    alt={activeProduct.name}
                />
            }

            <S.ProductInfo>
                <span>name</span>
                <h3>{activeProduct?.name.toLowerCase()}</h3>
            </S.ProductInfo>

            <S.ProductInfo>
                <span>category</span>
                <h3>{activeProduct?.category?.name.toLowerCase()}</h3>
            </S.ProductInfo>

            {
                activeProduct?.note &&
                <S.ProductInfo>
                    <span>note</span>
                    <h3>{activeProduct?.note}</h3>
                </S.ProductInfo>
            }

            <S.ButtonSection>
                <Button onClick={onDeleteProduct}>Delete</Button>
                <Button onClick={onAddToCart}>Add To List</Button>
            </S.ButtonSection>

            <DeleteProductModal />

        </S.ProductDescriptionBox>
    )
}