import type { ApiCardapioItem } from '@/types/api'
import { Card, FoodImage, FoodName, FoodDescription, AddButton } from './styles'

type Props = ApiCardapioItem & {
  onClick?: () => void
}

const truncate = (text: string, limit = 150) =>
  text.length > limit ? text.slice(0, limit) + '...' : text

const FoodCard = ({ foto, nome, descricao, onClick }: Props) => (
  <Card onClick={onClick}>
    <FoodImage src={foto} alt={nome} />
    <div>
      <FoodName>{nome}</FoodName>
      <FoodDescription>{truncate(descricao)}</FoodDescription>
      <AddButton type="button">Adicionar ao carrinho</AddButton>
    </div>
  </Card>
)

export default FoodCard
