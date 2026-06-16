import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ApiCardapioItem } from '@/types/api'
import type { CartItem } from '@/types/cart'

type AddPayload = {
  item: ApiCardapioItem
  restaurantId: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  isCheckoutOpen: boolean
  restaurantId: number | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false,
  restaurantId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddPayload>) => {
      const { item, restaurantId } = action.payload
      state.restaurantId = restaurantId
      state.items.push({ ...item, cartId: nanoid() })
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
      if (state.items.length === 0) {
        state.restaurantId = null
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isOpen = false
      state.isCheckoutOpen = true
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false
    },
    clear: (state) => {
      state.items = []
      state.restaurantId = null
      state.isCheckoutOpen = false
    }
  }
})

export const { add, remove, open, close, openCheckout, closeCheckout, clear } =
  cartSlice.actions
export default cartSlice.reducer
