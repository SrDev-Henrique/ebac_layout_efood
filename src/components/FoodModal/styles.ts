import styled from 'styled-components'
import { colors, spacing, typography, breakpoints } from '@/styles/tokens'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 10;
`

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: ${spacing.sm};
`

export const ModalBox = styled.div`
  background-color: ${colors.pink};
  display: flex;
  position: relative;
  max-width: 680px;
  width: 100%;
  z-index: 21;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  line-height: 1;
  padding: 4px 8px;
  cursor: pointer;
  z-index: 1;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 200px;
  }
`

export const ModalContent = styled.div`
  padding: ${spacing.md};
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`

export const FoodName = styled.h3`
  font-size: 18px;
  font-weight: ${typography.fontWeights.bold};
  margin-bottom: ${spacing.sm};
`

export const FoodDescription = styled.p`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.regular};
  line-height: ${typography.lineHeights.loose};
  flex: 1;
`

export const Serving = styled.p`
  font-size: ${typography.fontSizes.body};
  margin-top: ${spacing.md};
  margin-bottom: ${spacing.sm};
`

export const AddToCartButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-family: 'Roboto', sans-serif;
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  border: none;
  padding: 4px ${spacing.xs};
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`
