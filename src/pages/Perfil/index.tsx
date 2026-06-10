import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { ApiRestaurant } from '@/types/api'
import Alert from '@/components/Alert'
import { getRestaurant } from '@/services/api'
import HeaderPerfil from '@/components/HeaderPerfil'
import FoodList from '@/components/FoodList'
import Footer from '@/components/Footer'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<ApiRestaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cartCount] = useState(0)

  useEffect(() => {
    if (id) {
      getRestaurant(id)
        .then((data) => {
          setRestaurant(data)
        })
        .catch((err: Error) => {
          setError(err.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [id])

  return (
    <>
      {restaurant && (
        <HeaderPerfil
          restaurant={restaurant}
          cartCount={cartCount}
          onCartClick={() => undefined}
        />
      )}
      {error ? (
        <Alert message={error} />
      ) : (
        <FoodList
          items={restaurant?.cardapio ?? []}
          isLoading={isLoading}
        />
      )}
      <Footer />
    </>
  )
}

export default Perfil
