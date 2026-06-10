import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { api } from '@/services/api'
import cartReducer from './slices/cart'

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'restaurantId']
}

// redux-persist v6 ships Redux 4-era reducer types, which don't satisfy
// RTK 2 / Redux 5's Reducer signature. The cast back to the slice's reducer
// type bridges that gap and keeps RootState['cart'] as a clean CartState.
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartReducer
) as unknown as typeof cartReducer

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: persistedCartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
