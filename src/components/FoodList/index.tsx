import { useState } from 'react'
import type { ApiCardapioItem } from '@/types/api'
import Container from '@/components/Container'
import FoodCard from '@/components/FoodCard'
import FoodModal from '@/components/FoodModal'
import { Grid } from './styles'

type Props = {
  items: ApiCardapioItem[]
}

const FoodList = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ApiCardapioItem | null>(null)

  return (
    <>
      <Container>
        <Grid>
          {items.map((item) => (
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
