import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { ICategory } from '../../../shared/models';
import { shopApi } from '../../services';
import { setCategories } from '../reducers';


export const startGetCategories = createAsyncThunk(
    'categories/startGetCategories',
    async (any, { dispatch }) => {
        try {

            const { data } = await shopApi.get<ICategory[]>('/categories')

            dispatch(setCategories(data))

        } catch (error) {
            console.error(error)
            toast('Error al obtener los productos', 'error')
        }
    },
)