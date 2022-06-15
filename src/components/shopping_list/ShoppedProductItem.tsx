import { DeleteOutline } from '@mui/icons-material'
import { useState } from 'react'
import { addQuantity, removeFromCart, removeQuantity, useAppDispatch } from '../../config/redux'
import { IProduct } from '../../shared/models'
import * as S from './ShoppingList.styles'

interface Props {
    product: IProduct
    quantity: number
}

export const ShoppedProductItem = ({ product, quantity }: Props) => {

    const [isEditMode, IsEditMode] = useState(false)
    const dispatch = useAppDispatch()

    const toogleEditMode = () => {
        IsEditMode(!isEditMode)
    }

    const onRemove = () => {
        dispatch(removeFromCart(product))
    }

    const onAddQuantity = () => {
        dispatch(addQuantity(product))
    }

    const onRemoveQuantity = () => {
        dispatch(removeQuantity(product))
    }

    return (
        <S.ShoppedItemStyles
            isEditMode={isEditMode}
        >

            <span>{product.name}</span>

            <S.ShoppedItemConfig
                isEditMode={isEditMode}
            >

                <button
                    onClick={onRemove}
                    className="delete"
                >
                    <DeleteOutline />
                </button>

                <button
                    onClick={onRemoveQuantity}
                    className="less"
                >
                    -
                </button>

                <button
                    className='quantity'
                    onClick={toogleEditMode}
                >
                    {
                        quantity > 1
                            ? `${quantity} pcs`
                            : `${quantity} pc`
                    }
                </button>

                <button
                    onClick={onAddQuantity}
                    className="plus"
                >
                    +
                </button>

            </S.ShoppedItemConfig>

        </S.ShoppedItemStyles>
    )
}
