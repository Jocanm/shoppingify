import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { IActivePurchase, IPurchase, IPurchasedProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { addNewPurchase, CartItem, setActivePurchase, setCancelListModal, setCart, setDoneStatus, setPurchases } from '../reducers';
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

        }

    }
)

export const startGetAllPurchases = createAsyncThunk(
    'shopping/startGetAllPurchases',
    async (any, { dispatch }) => {

        try {

            const { data } = await shopApi.get<IPurchase[]>('/shopping/history');
            dispatch(setPurchases(data))

        } catch (error) {

            console.error(error)
            dispatch(setPurchases([]))

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
        }

    }
)

export const startUpdateShoppingListState = createAsyncThunk(
    'shopping/startUpdateShoppingList',
    async (state: 'cancelled' | 'completed', { getState, dispatch }) => {

        const { activePurchase } = (getState() as RootState).shopping

        const { id: purchaseId } = activePurchase!.purchase

        try {

            const { data: purchase } = await shopApi.put<IPurchase>(`/shopping/purchaseState/${purchaseId}`, { state })

            dispatch(setCancelListModal(false))
            dispatch(setActivePurchase(undefined as any))
            dispatch(setCart({}))
            dispatch(addNewPurchase(purchase))

            toast(`Shopping list ${state}`)

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)