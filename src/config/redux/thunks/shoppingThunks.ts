import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { IActivePurchase, IPurchasedProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { CartItem, setActivePurchase, setCart } from '../reducers';
import { RootState } from '../store';


export const startGetActivePurchase = createAsyncThunk(
    'shopping/startGetActivePurchase',
    async (any, { dispatch }) => {

        try {

            const { data } = await shopApi.get<IActivePurchase | null>('/shopping/activePurchase');

            if (data) {

                const newCartObject: CartItem = {};

                data.purchase.products.forEach(({ product, amount }) => {
                    newCartObject[product.id] = {
                        product,
                        quantity: amount
                    }
                })

                dispatch(setCart(newCartObject))
            }

        } catch (error) {

            console.error(error)
            toast("Something went wrong", "error")

        }

    }
)

export const startCreateShoppingList = createAsyncThunk(
    'categories/startCreateShoppingList',
    async (name: string, { dispatch, getState }) => {

        try {
            
            const { cart } = (getState() as RootState).cart

            const products: IPurchasedProduct[] = Object.values(cart).map(({ product, quantity }) => ({
                productId: product.id,
                quantity
            }))

            const dataToSend = { name, products }

            const { data } = await shopApi.post<IActivePurchase>('/shopping', dataToSend)

            dispatch(setActivePurchase(data))

        } catch (error) {

            console.error(error)
            toast('Something went wrong, please try again', 'error')

        }

    }
)