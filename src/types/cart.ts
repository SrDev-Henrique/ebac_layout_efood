import type { ApiCardapioItem } from '@/types/api'

export type CartItem = ApiCardapioItem & {
  cartId: string
}
