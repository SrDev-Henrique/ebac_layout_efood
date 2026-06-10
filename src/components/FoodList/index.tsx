import { useState } from 'react'
import type { ApiCardapioItem } from '@/types/api'
import Container from '@/components/Container'
import FoodCard from '@/components/FoodCard'
import FoodModal from '@/components/FoodModal'
import SkeletonFoodCard from '@/components/SkeletonFoodCard'
import { Grid } from './styles'

type Props = {
  items: ApiCardapioItem[]
  isLoading: boolean
}

const SKELETON_COUNT = 6

const FoodList = ({ items, isLoading }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ApiCardapioItem | null>(null)

  return (
    <>
      <Container>
        <Grid>
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <SkeletonFoodCard key={i} />
              ))
            : items.map((item) => (
                <FoodCard
                  key={item.id}
                  {...item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
        </Grid>
      </Container>

      {selectedItem && (
        <FoodModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  )
}

export default FoodList
