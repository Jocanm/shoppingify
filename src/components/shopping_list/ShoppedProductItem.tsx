import { DeleteOutline } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { addQuantity, removeFromCart, removeQuantity, useAppDispatch, useAppSelector } from '../../config/redux'
import { IProduct } from '../../shared/models'
import * as S from './ShoppingList.styles'

interface Props {
    product: IProduct
    quantity: number
}

export const ShoppedProductItem = ({ product, quantity }: Props) => {

    const { editShoppingListMode } = useAppSelector().ui
    const { activePurchase } = useAppSelector().shopping

    const [isEditMode, setIsEditMode] = useState(false)
    const dispatch = useAppDispatch()

    const toogleEditMode = () => {
        if (!editShoppingListMode && activePurchase) return;
        setIsEditMode(!isEditMode)
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

    useEffect(() => {

        if (!editShoppingListMode) {
            setIsEditMode(false)
        }

    }, [editShoppingListMode])

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
                    style={{
                        cursor: activePurchase
                            ? editShoppingListMode ? 'pointer' : 'default'
                            : 'pointer'
                    }}
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
