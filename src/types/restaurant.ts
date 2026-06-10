export type RestaurantTag = {
  text: string
}

export type Restaurant = {
  id: number
  title: string
  rating: string
  description: string
  image: string
  tags: RestaurantTag[]
}
