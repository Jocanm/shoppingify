import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from '../../../shared/helpers'
import { IPurchase } from '../../../shared/models'


export const globalApi = createApi({

    reducerPath: 'global',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),

    endpoints: (builder) => ({

        getShoppingDetails: builder.query<IPurchase, string>({

            query: (shoppingId) => `/shopping/${shoppingId}`,

            onQueryStarted: async (query, { queryFulfilled }) => {

                try {
                    await queryFulfilled
                } catch (error) {
                    console.error(error)
                    toast('Error fetching shopping details, plase try again later', 'error')
                }

            }

        }),

    }),

    keepUnusedDataFor: 180

})

export const {

    useGetShoppingDetailsQuery

} = globalApi