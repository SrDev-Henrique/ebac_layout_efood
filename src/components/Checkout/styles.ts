import styled from 'styled-components'
import { colors, spacing, typography } from '@/styles/tokens'

export const CheckoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`

export const CheckoutOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CheckoutPanel = styled.div`
  position: relative;
  z-index: 1;
  width: 360px;
  height: 100%;
  background-color: ${colors.pink};
  padding: ${spacing.md} ${spacing.sm};
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CheckoutTitle = styled.h2`
  color: ${colors.beige};
  font-size: 16px;
  font-weight: ${typography.fontWeights.bold};
  margin-top: ${spacing.md};
  margin-bottom: ${spacing.sm};
`

export const CheckoutDescription = styled.p`
  color: ${colors.beige};
  font-size: ${typography.fontSizes.body};
  line-height: 22px;
  margin-bottom: ${spacing.sm};
`

export const FormRow = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.xs};
`

type FieldGroupProps = { $width?: string }

export const FieldGroup = styled.div<FieldGroupProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: ${({ $width }) => ($width ? 'none' : '1')};
  width: ${({ $width }) => $width ?? 'auto'};

  label {
    color: ${colors.beige};
    font-size: ${typography.fontSizes.body};
    font-weight: ${typography.fontWeights.bold};
  }

  input {
    background-color: ${colors.beige};
    border: none;
    height: 32px;
    padding: 4px;
    font-size: ${typography.fontSizes.body};
    color: #4b4b4b;
    font-weight: ${typography.fontWeights.bold};
    width: 100%;
  }
`

export const FieldError = styled.small`
  color: #ffb3b3;
  font-size: 11px;
`

type ActionButtonProps = { $marginTop?: boolean }

export const ActionButton = styled.button<ActionButtonProps>`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.pink};
  border: none;
  height: 24px;
  font-size: ${typography.fontSizes.body};
  font-weight: ${typography.fontWeights.bold};
  cursor: pointer;
  margin-bottom: ${spacing.xs};
  margin-top: ${({ $marginTop }) => ($marginTop ? spacing.md : '0')};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
