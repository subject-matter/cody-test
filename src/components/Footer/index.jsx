import React from 'react'
import {Footer, H2, H2Middle} from './styles'

const FooterComponent = ({textColor}) => (
  <Footer $color={textColor}>
    <H2>Home</H2>
    <H2Middle $color={textColor}>About</H2Middle>
    <H2>Contact</H2>
  </Footer>
)

export default FooterComponent
