import type { ApiCardapioItem } from '@/types/api'
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
  onClose: () => void
}

const FoodModal = ({ item, onClose }: Props) => (
  <ModalWrapper>
    <ModalBox>
      <CloseButton onClick={onClose} aria-label="Fechar modal">×</CloseButton>
      <ModalImage src={item.foto} alt={item.nome} />
      <ModalContent>
        <FoodName>{item.nome}</FoodName>
        <FoodDescription>{item.descricao}</FoodDescription>
        <Serving>Serve: {item.porcao}</Serving>
        <AddToCartButton type="button">
          Adicionar ao carrinho - {formatPrice(item.preco)}
        </AddToCartButton>
      </ModalContent>
    </ModalBox>
    <Overlay onClick={onClose} />
  </ModalWrapper>
)

export default FoodModal
