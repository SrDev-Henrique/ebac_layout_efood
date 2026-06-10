import styled from 'styled-components'
import { colors, spacing, typography } from '@/styles/tokens'

export const AlertBox = styled.div`
  background-color: #fdecea;
  border: 1px solid ${colors.pink};
  border-radius: 4px;
  padding: ${spacing.sm};
  margin: ${spacing.md} auto;
  max-width: 600px;
  text-align: center;
`

export const AlertMessage = styled.p`
  color: ${colors.pink};
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
`
