import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { close, remove } from '@/store/slices/cart'
import { formatPrice } from '@/utils/formatters'
import {
  Overlay,
  SideBar,
  ItemList,
  CartItem,
  ItemImage,
  ItemName,
  ItemPrice,
  RemoveButton,
  TrashIcon,
  Total,
  CheckoutButton
} from './styles'

const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector((state) => state.cart)

  if (!isOpen) return null

  const totalPrice = items.reduce((acc, item) => acc + item.preco, 0)

  return (
    <>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ItemList>
          {items.map((item) => (
            <CartItem key={item.cartId}>
              <ItemImage src={item.foto} alt={item.nome} />
              <div>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
              </div>
              <RemoveButton
                type="button"
                onClick={() => dispatch(remove(item.cartId))}
                aria-label={`Remover ${item.nome} do carrinho`}
              >
                <TrashIcon src="/images/trash.png" alt="" />
              </RemoveButton>
            </CartItem>
          ))}
        </ItemList>
        <Total>
          <span>Valor total</span>
          <span>{formatPrice(totalPrice)}</span>
        </Total>
        <CheckoutButton type="button">Continuar com a entrega</CheckoutButton>
      </SideBar>
    </>
  )
}

export default Cart
