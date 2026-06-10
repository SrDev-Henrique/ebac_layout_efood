import type { Restaurant } from '@/types/restaurant'
import type { ApiRestaurant } from '@/types/api'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await fetch(API_URL)
  const data: ApiRestaurant[] = await response.json()

  return data.map((r) => ({
    id: r.id,
    title: r.titulo,
    rating: r.avaliacao.toString(),
    description: r.descricao,
    image: r.capa,
    tags: [
      ...(r.destacado ? [{ text: 'Destaque do dia' }] : []),
      { text: r.tipo }
    ]
  }))
}

export async function getRestaurant(id: string): Promise<ApiRestaurant> {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}
