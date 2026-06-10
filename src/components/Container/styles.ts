import styled from 'styled-components'
import { layout, spacing } from '@/styles/tokens'

export const StyledContainer = styled.div`
  max-width: ${layout.containerWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${spacing.sm};
`
