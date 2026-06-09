import styled from 'styled-components'
import { colors, layout, spacing, typography } from '@/styles/tokens'

export const Card = styled.article`
  max-width: ${layout.restaurantCardWidth};
  width: 100%;
  height: auto;
  border: 1px solid ${colors.pink};
  background-color: ${colors.white};
  color: ${colors.pink};
  margin-bottom: ${layout.restaurantCardSpacing};
  position: relative;
`

export const CoverImage = styled.img`
  width: 100%;
  height: ${layout.restaurantImageHeight};
  object-fit: cover;
`

export const Tags = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  top: ${spacing.sm};
  right: ${spacing.sm};
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.lineHeights.normal};
  margin-top: ${spacing.xs};
  margin-bottom: ${spacing.sm};
  margin-left: ${spacing.xs};
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.lineHeights.normal};
  margin-top: ${spacing.xs};
  margin-bottom: ${spacing.sm};
`

export const StarIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 ${spacing.xs};
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: ${typography.fontWeights.regular};
  line-height: ${typography.lineHeights.loose};
  max-width: 456px;
  margin-left: ${spacing.xs};
  margin-bottom: ${spacing.sm};
`

export const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  min-width: 82px;
  background-color: ${colors.pink};
  color: ${colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: ${typography.fontWeights.bold};
  font-size: ${typography.fontSizes.body};
  line-height: ${typography.lineHeights.tight};
  letter-spacing: 0;
  text-align: center;
  margin: ${spacing.xs};
  padding: 5px ${spacing.xs};
  border: none;
  cursor: pointer;
`
