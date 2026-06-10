import type { ReactNode } from 'react'
import { TagContainer } from './styles'

export type Props = {
  children: ReactNode
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
