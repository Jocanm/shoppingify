import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from '../../../shared/helpers'
import { IPurchase, IStatistic } from '../../../shared/models'
import { deleteProduct, removeFromCart, setActiveProduct, setDeleteProductModal, setShowProductDetails, toggleShowShoppingList } from '../reducers'


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

        })

    }),

    keepUnusedDataFor: 10800,

})

export const {

    useGetShoppingDetailsQuery,
    useDeleteProductMutation,
    useGetTopStatisticsQuery,

} = globalApi