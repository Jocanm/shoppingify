import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../shared/helpers';
import { IActivePurchase } from '../../../shared/models';
import { shopApi } from '../../services';
import { CartItem, setActivePurchase, setCart } from '../reducers';


export const startGetActivePurchase = createAsyncThunk(
    'shopping/startGetActivePurchase',
    async (any, { dispatch }) => {

        try {

            const { data } = await shopApi.get<IActivePurchase | null>('/shopping/activePurchase');

            if (data) {
                const productsToCard = data.purchase.products.map(({ amount, product }) => ({
                    product,
                    amount
                }))

                const newCartObject: CartItem = {};

                productsToCard.forEach(({ product, amount }) => {
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