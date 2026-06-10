import styled from 'styled-components'
import { colors, layout, spacing, typography } from '@/styles/tokens'

export const ContainerFooter = styled.section`
  background-color: ${colors.beige};
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: ${spacing.lg};
`

export const ListLogos = styled.ul`
  display: flex;
  gap: ${spacing.xs};
  list-style: none;
  justify-content: center;
  padding-top: 32px;
`

export const TextFooter = styled.p`
  color: ${colors.pink};
  font-size: ${typography.fontSizes.caption};
  line-height: ${typography.lineHeights.normal};
  max-width: ${layout.footerTextWidth};
  width: 100%;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: ${spacing.xl};
  padding-right: ${spacing.sm};
  padding-bottom: ${spacing.lg};
  padding-left: ${spacing.sm};
`
