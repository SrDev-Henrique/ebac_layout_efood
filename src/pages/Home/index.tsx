import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RestaurantList from '@/components/RestaurantList'
import { getRestaurants } from '@/services/api'
import type { Restaurant } from '@/types/restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    getRestaurants().then(setRestaurants)
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
