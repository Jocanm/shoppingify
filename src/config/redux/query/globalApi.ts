import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getReduxState, toast } from '../../../shared/helpers'
import { IPurchase, IStatistic } from '../../../shared/models'
import { addNewPurchase, deleteProduct, removeFromCart, setActiveProduct, setActivePurchase, setCancelListModal, setCart, setCompleteListModal, setDeleteProductModal, setShowProductDetails, toggleShowShoppingList } from '../reducers'


export const globalApi = createApi({

    reducerPath: 'global',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),

    tagTypes: ['shopping', 'statistics', 'none'],

    endpoints: (builder) => ({

        deleteProduct: builder.mutation<unknown, string>({

            query: (id) => {
                return {
                    url: `/product/${id}`,
                    method: 'DELETE',
                }
            },

            invalidatesTags: ['shopping'],

            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {

                try {
                    await queryFulfilled;

                    dispatch(setActiveProduct(undefined))
                    dispatch(setShowProductDetails(false))
                    dispatch(setDeleteProductModal(false))
                    dispatch(deleteProduct(id))
                    dispatch(removeFromCart(id))
                    dispatch(toggleShowShoppingList())

                    toast('Product deleted successfully', 'success')
                } catch (error) {
                    console.error(error)
                    toast('Something went wrong, please try again', 'error')
                }
            }

        }),

        getShoppingDetails: builder.query<IPurchase, string>({

            query: (shoppingId) => `/shopping/${shoppingId}`,
            onQueryStarted: async (query, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                } catch (error) {
                    console.error(error)
                    toast('Error fetching shopping details, plase try again later', 'error')
                }
            },
            providesTags: ['shopping'],

        }),

        getTopStatistics: builder.query<IStatistic, any>({

            query: () => `/statistics`,
            providesTags: ['statistics'],
            onQueryStarted: async (query, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                } catch (error) {
                    console.error(error)
                    toast('Error fetching statistics, plase try again later', 'error')
                }
            },

        }),

        updatePurchaseState: builder.mutation<IPurchase, { state: 'cancelled' | 'completed', id: string }>({

            query: ({ id, state }) => {

                return {
                    url: `/shopping/purchaseState/${id}`,
                    method: 'PUT',
                    body: { state }
                }
            },

            invalidatesTags: ['statistics'],

            onQueryStarted: async ({ state }, { dispatch, queryFulfilled }) => {


                try {

                    const { data: purchase } = await queryFulfilled;

                    dispatch(setCancelListModal(false))
                    dispatch(setCompleteListModal(false))
                    dispatch(setActivePurchase(undefined as any))
                    dispatch(setCart({}))
                    dispatch(addNewPurchase(purchase))

                    toast(`Shopping list ${state}`)

                } catch (error) {
                    console.error(error)
                    toast('Something went wrong, please try again', 'error')
                }


            }

        })

    }),

    keepUnusedDataFor: 10800,

})

export const {

    useGetShoppingDetailsQuery,
    useDeleteProductMutation,
    useGetTopStatisticsQuery,
    useUpdatePurchaseStateMutation,

} = globalApi