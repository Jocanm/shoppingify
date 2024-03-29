import { DeleteOutline } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { addQuantity, removeFromCart, removeQuantity, RootState, useAppDispatch, useAppSelector } from '../../config/redux'
import { IProduct } from '../../shared/models'
import { Box } from '../globalComponents'
import { CustomCheck } from '../'
import * as S from './ShoppingList.styles'
import { useSelector } from 'react-redux';

interface Props {
    product: IProduct
    quantity: number
    done: boolean
}

export const ShoppedProductItem = (props: Props) => {

    const { product, quantity, done } = props

    // const { editShoppingListMode } = useAppSelector().ui
    // const { activePurchase } = useAppSelector().shopping

    const editShoppingListMode = useSelector((state: RootState) => state.ui.editShoppingListMode)
    const activePurchase = useSelector((state: RootState) => state.shopping.activePurchase)

    const [isEditMode, setIsEditMode] = useState(false)
    const dispatch = useAppDispatch()

    const toogleEditMode = () => {
        if (!editShoppingListMode && activePurchase) return;
        setIsEditMode(!isEditMode)
    }

    const onRemove = () => {
        dispatch(removeFromCart(product.id))
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

    }, [editShoppingListMode, activePurchase])

    return (
        <S.ShoppedItemStyles
            isEditMode={isEditMode}
        >

            <Box flex alignCenter gap=".8rem">
                <CustomCheck {...props} />
                <span
                    style={{
                        textDecoration:
                            (done && activePurchase && !editShoppingListMode) ? 'line-through' : 'none'
                    }}
                >
                    {product.name}
                </span>
            </Box>

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
