import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { IActivePurchase } from '../../../shared/models';
import { shopApi } from '../../services';
import { setActivePurchase } from '../reducers';


export const startGetActivePurchase = createAsyncThunk(
    'shopping/startGetActivePurchase',
    async (any, { dispatch }) => {

        try {

            const { data } = await shopApi.get<IActivePurchase | null>('/shopping/activePurchase');

            dispatch(setActivePurchase(data));

        } catch (error) {

            console.error(error)
            toast("Something went wrong", "error")

        }

    }
)