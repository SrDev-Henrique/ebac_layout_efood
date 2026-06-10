import type { ApiCardapioItem } from '@/types/api'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { add, open } from '@/store/slices/cart'
import { formatPrice } from '@/utils/formatters'
import {
  Overlay,
  ModalWrapper,
  ModalBox,
  CloseButton,
  ModalImage,
  ModalContent,
  FoodName,
  FoodDescription,
  Serving,
  AddToCartButton
} from './styles'

type Props = {
  item: ApiCardapioItem
  restaurantId: number
  onClose: () => void
}

const FoodModal = ({ item, restaurantId, onClose }: Props) => {
  const dispatch = useAppDispatch()
  const { items, restaurantId: cartRestaurantId } = useAppSelector(
    (state) => state.cart
  )

  const handleAddToCart = () => {
    if (
      items.length > 0 &&
      cartRestaurantId != null &&
      cartRestaurantId !== restaurantId
    ) {
      window.alert(
        'Você só pode realizar pedidos de um único restaurante por vez. ' +
          'Finalize ou remova os itens do carrinho antes de adicionar pratos de outro restaurante.'
      )
      return
    }
    dispatch(add({ item, restaurantId }))
    dispatch(open())
    onClose()
  }

  return (
    <ModalWrapper>
      <ModalBox>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          ×
        </CloseButton>
        <ModalImage src={item.foto} alt={item.nome} />
        <ModalContent>
          <FoodName>{item.nome}</FoodName>
          <FoodDescription>{item.descricao}</FoodDescription>
          <Serving>Serve: {item.porcao}</Serving>
          <AddToCartButton type="button" onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatPrice(item.preco)}
          </AddToCartButton>
        </ModalContent>
      </ModalBox>
      <Overlay onClick={onClose} />
    </ModalWrapper>
  )
}

export default FoodModal
