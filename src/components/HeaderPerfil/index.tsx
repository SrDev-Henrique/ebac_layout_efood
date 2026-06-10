import { Link } from 'react-router-dom'
import type { ApiRestaurant } from '@/types/api'
import Container from '@/components/Container'
import {
  TopBar,
  TopBarContent,
  LogoImg,
  NavLink,
  CartText,
  Banner,
  BannerContent,
  RestaurantType,
  RestaurantName
} from './styles'

type Props = {
  restaurant: ApiRestaurant
  cartCount: number
  onCartClick: () => void
}

const HeaderPerfil = ({ restaurant, cartCount, onCartClick }: Props) => (
  <>
    <TopBar>
      <Container>
        <TopBarContent>
          <NavLink as={Link} to="/">
            Restaurantes
          </NavLink>
          <LogoImg src="/images/logo.svg" alt="efood" />
          <CartText onClick={onCartClick}>
            {cartCount} produto(s) no carrinho
          </CartText>
        </TopBarContent>
      </Container>
    </TopBar>

    <Banner
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.45)), url(${restaurant.capa})`
      }}
    >
      <BannerContent>
        <RestaurantType>{restaurant.tipo}</RestaurantType>
        <RestaurantName>{restaurant.titulo}</RestaurantName>
      </BannerContent>
    </Banner>
  </>
)

export default HeaderPerfil
