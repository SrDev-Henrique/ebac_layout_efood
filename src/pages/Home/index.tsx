import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RestaurantList from '@/components/RestaurantList'
import { restaurants } from '@/data/restaurants'

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurants} />
    <Footer />
  </>
)

export default Home
