import styled from 'styled-components'
import { colors, spacing, typography, breakpoints } from '@/styles/tokens'

export const TopBar = styled.header`
  width: 100%;
  height: 186px;
  background-image: url('/images/fundo.png');
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 ${spacing.lg};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    padding: ${spacing.md};
    gap: ${spacing.sm};
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
  }
`

export const LogoImg = styled.img`
  height: auto;
  max-width: 130px;
`

export const NavLink = styled.a`
  font-size: 18px;
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.pink};
  cursor: pointer;
  justify-self: start;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-self: center;
  }
`

export const CartText = styled.span`
  font-size: 18px;
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.pink};
  cursor: pointer;
  justify-self: end;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-self: center;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    height: 220px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }
`

export const BannerContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.sm};
  color: ${colors.white};
`

export const RestaurantType = styled.p`
  font-size: 16px;
  font-weight: ${typography.fontWeights.regular};
  margin-bottom: ${spacing.sm};
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: ${typography.fontWeights.bold};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`
