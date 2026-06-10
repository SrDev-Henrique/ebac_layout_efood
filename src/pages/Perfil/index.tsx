import { useParams } from 'react-router-dom'
import Alert from '@/components/Alert'
import { useGetRestaurantQuery } from '@/services/api'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { open } from '@/store/slices/cart'
import HeaderPerfil from '@/components/HeaderPerfil'
import FoodList from '@/components/FoodList'
import Cart from '@/components/Cart'
import Footer from '@/components/Footer'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: restaurant,
    isLoading,
    isError
  } = useGetRestaurantQuery(id ?? '', { skip: !id })

  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)

  return (
    <>
      {restaurant && (
        <HeaderPerfil
          restaurant={restaurant}
          cartCount={items.length}
          onCartClick={() => dispatch(open())}
        />
      )}
      {isError ? (
        <Alert message="Não foi possível carregar o restaurante." />
      ) : (
        <FoodList
          items={restaurant?.cardapio ?? []}
          isLoading={isLoading}
          restaurantId={restaurant?.id}
        />
      )}
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
