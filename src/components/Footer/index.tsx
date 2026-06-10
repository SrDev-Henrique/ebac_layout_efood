import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Logo src="/images/logo.svg" alt="Efood" />
    <ListLogos>
      <li>
        <a href="#" aria-label="Instagram do efood">
          <img src="/images/instagram.png" alt="" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#" aria-label="Twitter do efood">
          <img src="/images/twitter.png" alt="" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#" aria-label="Facebook do efood">
          <img src="/images/fb.png" alt="" aria-hidden="true" />
        </a>
      </li>
    </ListLogos>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
