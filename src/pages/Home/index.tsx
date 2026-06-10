import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RestaurantList from '@/components/RestaurantList'
import { useGetRestaurantsQuery } from '@/services/api'

const Home = () => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      {isError ? (
        <Alert message="Erro ao carregar os restaurantes." />
      ) : (
        <RestaurantList restaurants={restaurants ?? []} isLoading={isLoading} />
      )}
      <Footer />
    </>
  )
}

export default Home
