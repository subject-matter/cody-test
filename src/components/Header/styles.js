import styled, {css} from 'styled-components'
import {ReactComponent as LogoSVG} from './SMSVG.svg'

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`

export const Logo = styled(LogoSVG).attrs(({$color}) => ({
  style: {
    fill: `${$color}`
  }
}))`
  height: auto;
  max-width: 760px;
  width: 100%;

  path {
    fill: inherit;
  }
`
