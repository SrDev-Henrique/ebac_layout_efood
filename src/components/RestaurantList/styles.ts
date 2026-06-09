import styled from 'styled-components'
import { breakpoints, layout, spacing } from '@/styles/tokens'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: ${layout.restaurantGridGap};
  justify-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
