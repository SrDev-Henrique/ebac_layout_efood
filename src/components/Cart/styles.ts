import styled from 'styled-components'
import { colors, spacing, typography } from '@/styles/tokens'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 30;
`

export const SideBar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.pink};
  padding: ${spacing.lg} ${spacing.xs} 0;
  overflow-y: auto;
  z-index: 31;
`

export const ItemList = styled.ul`
  list-style: none;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: ${spacing.xs};
  background-color: ${colors.beige};
  color: ${colors.pink};
  margin-bottom: ${spacing.sm};
  padding: ${spacing.xs};
`

export const ItemImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ItemName = styled.h3`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  margin-bottom: ${spacing.xs};
`

export const ItemPrice = styled.span`
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.regular};
`

export const RemoveButton = styled.button`
  position: absolute;
  right: ${spacing.xs};
  bottom: ${spacing.xs};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  line-height: 0;
`

export const TrashIcon = styled.img`
  width: 16px;
  height: 16px;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.beige};
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  padding-top: ${spacing.lg};
`

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: ${spacing.sm};
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  border: none;
  padding: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
