/* eslint-disable @next/next/no-img-element */
import { ArrowRightAlt } from '@mui/icons-material'
import { addToCart, setActiveProduct, setDeleteProductModal, toggleShowShoppingList, useAppDispatch, useAppSelector } from '../../../config/redux'
import { IProduct } from '../../../shared/models'
import { Button } from '../../ui/buttons'
import { DeleteProductModal } from '../../ui/modals'
import * as S from './ProductsList.styles'

interface Props{
    setShowNewProduct: (show: boolean) => void
}

export const ProductDescription = ({setShowNewProduct}:Props) => {

    const dispatch = useAppDispatch()
    const { activeProduct } = useAppSelector().categories

    const cleanActiveProduct = () => {
        dispatch(setActiveProduct(undefined))
        dispatch(toggleShowShoppingList())
    }

    const onAddToCart = () => {
        dispatch(addToCart(activeProduct as IProduct))
        dispatch(setActiveProduct(undefined))
        setShowNewProduct(false)
    }

    const onDeleteProduct = () => {
        dispatch(setDeleteProductModal(true))
    }

    if (!activeProduct) return null

    return (
        <S.ProductDescriptionBox>

            <S.BackButton onClick={cleanActiveProduct}>
                <ArrowRightAlt />
                back
            </S.BackButton>

            {
                activeProduct?.image &&
                <S.ProductImage src={activeProduct.image} alt="123123" />
            }

            <S.ProductInfo>
                <span>name</span>
                <h3>{activeProduct.name.toLowerCase()}</h3>
            </S.ProductInfo>

            <S.ProductInfo>
                <span>category</span>
                <h3>{activeProduct.category?.name.toLowerCase()}</h3>
            </S.ProductInfo>

            {
                activeProduct.note &&
                <S.ProductInfo>
                    <span>note</span>
                    <h3>{activeProduct.note}</h3>
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
