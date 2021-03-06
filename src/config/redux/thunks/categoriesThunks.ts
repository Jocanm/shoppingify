import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductFormProps } from '../../../components/materials/newMaterial/NewProductCard';
import { toast } from '../../../shared/helpers';
import { ICategory, IProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { addCategory, addProduct, deleteProduct, removeFromCart, setActiveProduct, setCategories, setDeleteProductModal, setShowProductDetails, toggleShowShoppingList } from '../reducers';
import { RootState } from '../store';


export const startGetCategories = createAsyncThunk(
    'categories/startGetCategories',
    async (any, { dispatch }) => {
        try {

            const { data } = await shopApi.get<ICategory[]>('/categories')

            dispatch(setCategories(data.reverse()))

        } catch (error) {
            console.error(error)
        }
    },
)

export const startCreateNewProduct = createAsyncThunk(
    'categories/startCreateNewProduct',
    async (product: ProductFormProps, { dispatch }) => {

        try {

            const { data } = await shopApi.post<IProduct>('/product', product)

            const { category } = data

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