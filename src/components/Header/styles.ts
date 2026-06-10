import styled from 'styled-components'
import { colors, layout, spacing, typography } from '@/styles/tokens'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-image: url('/images/fundo.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.xl};
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

export const TextHeader = styled.p`
  font-weight: ${typography.fontWeights.bold};
  font-size: ${typography.fontSizes.hero};
  line-height: ${typography.lineHeights.tight};
  color: ${colors.pink};
  margin-top: 138px;
  max-width: ${layout.headerTextWidth};
  width: 100%;
  padding: 0 ${spacing.sm};
  text-align: center;
`
