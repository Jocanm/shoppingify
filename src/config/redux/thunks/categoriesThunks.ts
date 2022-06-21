import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { ICategory, IProduct } from '../../../shared/models';
import { shopApi } from '../../services';
import { addCategory, addProduct, setCategories } from '../reducers';
import { ProductFormProps } from '../../../components/materials/newMaterial/NewProductCard';


export const startGetCategories = createAsyncThunk(
    'categories/startGetCategories',
    async (any, { dispatch }) => {
        try {

            const { data } = await shopApi.get<ICategory[]>('/categories')

            dispatch(setCategories(data.reverse()))

        } catch (error) {
            console.error(error)
            toast('Error al obtener los productos', 'error')
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

            toast('Producto creado correctamente', 'success')

        } catch (error) {

            console.error(error)
            toast('Error al crear el producto', 'error')

        }

    }
)