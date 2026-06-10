import styled from 'styled-components'
import { colors, spacing, typography } from '@/styles/tokens'

export const Card = styled.article`
  background-color: ${colors.pink};
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

export const FoodImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  padding: ${spacing.xs};
`

export const FoodName = styled.h4`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  padding: 0 ${spacing.xs} ${spacing.xs};
`

export const FoodDescription = styled.p`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.regular};
  line-height: ${typography.lineHeights.loose};
  padding: 0 ${spacing.xs} ${spacing.xs};
  flex: 1;
`

export const AddButton = styled.button`
  display: block;
  width: calc(100% - ${spacing.sm});
  margin: 0 ${spacing.xs} ${spacing.xs};
  padding: 4px ${spacing.xs};
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-family: 'Roboto', sans-serif;
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
