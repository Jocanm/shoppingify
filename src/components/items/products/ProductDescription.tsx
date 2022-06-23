/* eslint-disable @next/next/no-img-element */
import { ArrowRightAlt } from '@mui/icons-material'
import { addToCart, setActiveProduct, useAppDispatch, useAppSelector } from '../../../config/redux'
import { IProduct } from '../../../shared/models'
import { Button } from '../../ui/buttons'
import * as S from './ProductsList.styles'

interface Props{
    setShowNewProduct: (show: boolean) => void
}

export const ProductDescription = ({setShowNewProduct}:Props) => {

    const dispatch = useAppDispatch()
    const { activeProduct } = useAppSelector().categories

    const cleanActiveProduct = () => {
        dispatch(setActiveProduct(undefined))
    }

    const onAddToCart = () => {
        dispatch(addToCart(activeProduct as IProduct))
        dispatch(setActiveProduct(undefined))
        setShowNewProduct(false)
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
                <Button>Delete</Button>
                <Button onClick={onAddToCart}>Add To List</Button>
            </S.ButtonSection>

        </S.ProductDescriptionBox>
    )
}
