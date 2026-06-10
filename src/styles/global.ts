import { createGlobalStyle } from 'styled-components'
import { colors } from '@/styles/tokens'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.lightBeige};
  }
`
