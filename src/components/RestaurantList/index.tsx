import Container from '../Container'
import RestaurantCard from '../RestaurantCard'
import type { Restaurant } from '@/types/restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </List>
  </Container>
)

export default RestaurantList
