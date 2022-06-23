/* eslint-disable @next/next/no-img-element */
import { ArrowRightAlt } from '@mui/icons-material'
import { setActiveProduct, useAppDispatch, useAppSelector } from '../../../config/redux'
import { Button } from '../../ui/buttons'
import * as S from './ProductsList.styles'

export const ProductDescription = () => {

    const dispatch = useAppDispatch()
    const { activeProduct } = useAppSelector().categories

    const cleanActiveProduct = () => {
        dispatch(setActiveProduct(undefined))
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
                <Button>Add To List</Button>
            </S.ButtonSection>

        </S.ProductDescriptionBox>
    )
}
