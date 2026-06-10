import { useEffect, useState } from 'react'
import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RestaurantList from '@/components/RestaurantList'
import { getRestaurants } from '@/services/api'
import type { Restaurant } from '@/types/restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data)
      })
      .catch((err: Error) => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      {error ? (
        <Alert message={error} />
      ) : (
        <RestaurantList restaurants={restaurants} isLoading={isLoading} />
      )}
      <Footer />
    </>
  )
}

export default Home
