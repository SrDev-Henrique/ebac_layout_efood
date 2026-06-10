import { Imagem, Logo, TextHeader } from './styles'

const Header = () => (
  <Imagem>
    <Logo src="/images/logo.svg" alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
