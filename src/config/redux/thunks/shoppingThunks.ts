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

                data.purchase.products.forEach(({ product, quantity }) => {
                    newCartObject[product.id] = {
                        product,
                        quantity
                    }
                })

                dispatch(setCart(newCartObject))
                dispatch(setActivePurchase(data))

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

export const startUpdateShoppingListData = createAsyncThunk(
    'categories/startUpdateShoppingList',
    async (name: string, { getState, dispatch }) => {

        const { activePurchase } = (getState() as RootState).shopping
        const { cart } = (getState() as RootState).cart

        const { id } = activePurchase!.purchase

        const products = Object.values(cart).map(({ product, quantity }) => ({
            productId: product.id,
            quantity,
        }))

        const body = {
            name,
            products
        }

        try {

            const { data } = await shopApi.put(`/shopping/${id}`, body)
            toast('Shopping list updated')

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)