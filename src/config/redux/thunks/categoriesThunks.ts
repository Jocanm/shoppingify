import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { ICategory, IProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { addCategory, addProduct, deleteProduct, removeFromCart, setActiveProduct, setCategories, setDeleteProductModal, toggleShowShoppingList } from '../reducers';
import { ProductFormProps } from '../../../components/materials/newMaterial/NewProductCard';
import { RootState } from '../store';


export const startGetCategories = createAsyncThunk(
    'categories/startGetCategories',
    async (any, { dispatch }) => {
        try {

            const { data } = await shopApi.get<ICategory[]>('/categories')

            dispatch(setCategories(data.reverse()))

        } catch (error) {
            console.error(error)
            toast('Something went wrong', 'error')
        }
    },
)

export const startCreateNewProduct = createAsyncThunk(
    'categories/startCreateNewProduct',
    async (product: ProductFormProps, { dispatch }) => {

        try {

            const { data } = await shopApi.post<IProduct>('/product', product)

            const { category } = data

            console.log(data)

            dispatch(addProduct(data))
            dispatch(addCategory(category))
            dispatch(toggleShowShoppingList())

            toast('Product created successfully', 'success')

        } catch (error) {

            console.error(error)
            toast('Something went wrong, please try again', 'error')

        }

    }
)

export const startDeleteProduct = createAsyncThunk(
    'categories/startDeleteProduct',
    async (any, { dispatch, getState }) => {

        const { activeProduct } = (getState() as RootState).categories

        try {

            await shopApi.delete(`/product/${activeProduct?.id}`)

            dispatch(setActiveProduct(undefined))
            dispatch(setDeleteProductModal(false))
            dispatch(deleteProduct(activeProduct?.id as string))
            dispatch(removeFromCart(activeProduct!))
            dispatch(toggleShowShoppingList())

            toast('Product deleted successfully', 'success')

        } catch (error) {
            console.error(error)
            toast('Something went wrong, please try again', 'error')
        }

    }
)