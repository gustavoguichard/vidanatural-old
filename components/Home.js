import { memo } from 'react'
import Logo from 'components/Logo'
import ImageContainer from 'components/ImageContainer'

import 'styles/home.scss'

export default memo(() => (
  <ImageContainer src="/static/home-bg.jpg" id="home" contentClass="home-bg">
    <Logo clickable className="home-logo" />
  </ImageContainer>
))
