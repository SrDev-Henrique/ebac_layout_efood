import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { ApiRestaurant } from '@/types/api'
import { getRestaurant } from '@/services/api'
import HeaderPerfil from '@/components/HeaderPerfil'
import FoodList from '@/components/FoodList'
import Footer from '@/components/Footer'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<ApiRestaurant | null>(null)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    if (id) {
      getRestaurant(id).then(setRestaurant)
    }
  }, [id])

  if (!restaurant) return null

  return (
    <>
      <HeaderPerfil
        restaurant={restaurant}
        cartCount={cartCount}
        onCartClick={() => {}}
      />
      <FoodList items={restaurant.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
