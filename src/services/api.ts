import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '@/types/restaurant'
import type { ApiRestaurant } from '@/types/api'
import type { CheckoutPayload, CheckoutResponse } from '@/types/checkout'

function mapRestaurant(r: ApiRestaurant): Restaurant {
  return {
    id: r.id,
    title: r.titulo,
    rating: r.avaliacao.toString(),
    description: r.descricao,
    image: r.capa,
    tags: [
      ...(r.destacado ? [{ text: 'Destaque do dia' }] : []),
      { text: r.tipo }
    ]
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
      transformResponse: (response: ApiRestaurant[]) =>
        response.map(mapRestaurant)
    }),
    getRestaurant: builder.query<ApiRestaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api
