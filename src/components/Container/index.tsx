import type { HTMLAttributes } from 'react'
import { StyledContainer } from './styles'

type Props = HTMLAttributes<HTMLDivElement>

const Container = ({ children, ...props }: Props) => (
  <StyledContainer {...props}>{children}</StyledContainer>
)

export default Container
