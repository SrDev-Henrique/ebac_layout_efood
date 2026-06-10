import Container from '../Container'
import RestaurantCard from '../RestaurantCard'
import SkeletonRestaurantCard from '../SkeletonRestaurantCard'
import type { Restaurant } from '@/types/restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
  isLoading: boolean
}

const SKELETON_COUNT = 6

const RestaurantList = ({ restaurants, isLoading }: Props) => (
  <Container>
    <List>
      {isLoading
        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonRestaurantCard key={i} />
          ))
        : restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
    </List>
  </Container>
)

export default RestaurantList
