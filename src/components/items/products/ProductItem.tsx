import { Add } from '@mui/icons-material';
import { useMemo } from 'react';
import { addToCart, useAppDispatch, useAppSelector } from '../../../config/redux';
import { openProductDetails } from '../../../config/redux/actions';
import { IProduct } from '../../../shared/models';
import * as S from './ProductsList.styles';

export const ProductItem = (product: IProduct) => {

    const dispatch = useAppDispatch()
    const { cart } = useAppSelector().cart

    const onAddToCart = () => {
        dispatch(addToCart(product))
    }

    const onSelectProduct = () => {
        openProductDetails(product)
    }

    const isInCart = useMemo(() => {

        return Object.keys(cart).includes(product.id)

    }, [product,cart])

    return (
        <S.ProductItemBox
            isInCart={isInCart}
        >

            <span onClick={onSelectProduct}>{product.name}</span>

            <button
                onClick={onAddToCart}
            >
                <Add />
            </button>

        </S.ProductItemBox>
    )
}
