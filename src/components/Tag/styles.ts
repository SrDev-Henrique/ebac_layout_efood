import styled from 'styled-components'
import { colors, spacing, typography } from '@/styles/tokens'

export const TagContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${colors.pink};
  color: ${colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${typography.fontSizes.small};
  font-weight: ${typography.fontWeights.bold};
  display: flex;
  margin: ${spacing.xs};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px ${spacing.xs};
  line-height: ${typography.lineHeights.tight};
  white-space: nowrap;
  box-sizing: border-box;
`
