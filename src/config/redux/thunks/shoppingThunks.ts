import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { IActivePurchase, IPurchasedProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { CartItem, setActivePurchase, setCancelListModal, setCart, setCompleteListModal, setDoneStatus } from '../reducers';
import { RootState } from '../store';


export const startGetActivePurchase = createAsyncThunk(
    'shopping/startGetActivePurchase',
    async (any, { dispatch }) => {

        try {

            const { data } = await shopApi.get<IActivePurchase | null>('/shopping/activePurchase');

            if (data) {

                const newCartObject: CartItem = {};

                data.purchase.products.forEach(({ product, quantity, done }) => {
                    newCartObject[product.id] = {
                        product,
                        quantity,
                        done
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
            toast("Shopping list created", "success")

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

export const startSetDoneStatus = createAsyncThunk(
    'shopping/startSetDoneStatus',
    async ({ id: productId, done, quantity }: {

        id: string, done: boolean, quantity: number

    }, { getState, dispatch }) => {

        const { activePurchase } = (getState() as RootState).shopping

        const { id: purchaseId } = activePurchase!.purchase

        dispatch(setDoneStatus({ id: productId, done }))

        const body = {
            done,
            quantity
        }

        try {

            await shopApi.put(`/purchasedProduct/setDoneStatus?purchaseId=${purchaseId}&productId=${productId}`, body)

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)

export const startCancelShoppingList = createAsyncThunk(
    'shopping/startCancelShoppingList',
    async (any, { getState, dispatch }) => {

        const { activePurchase } = (getState() as RootState).shopping

        const { id: purchaseId } = activePurchase!.purchase

        const body = {
            state: 'cancelled',
        }

        try {

            await shopApi.put(`/shopping/purchaseState/${purchaseId}`, body)

            dispatch(setCancelListModal(false))
            dispatch(setActivePurchase(undefined as any))
            dispatch(setCart({}))
            toast('Shopping list cancelled')

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)

export const startCompleteShoppingList = createAsyncThunk(
    'shopping/startCompleteShoppingList',
    async (any, { getState, dispatch }) => {

        const { activePurchase } = (getState() as RootState).shopping

        const { id: purchaseId } = activePurchase!.purchase

        const body = {
            state: 'completed',
        }

        try {

            await shopApi.put(`/shopping/purchaseState/${purchaseId}`, body)

            dispatch(setCompleteListModal(false))
            dispatch(setActivePurchase(undefined as any))
            dispatch(setCart({}))
            toast('Shopping list completed')

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)