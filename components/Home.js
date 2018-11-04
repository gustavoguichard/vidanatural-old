import { memo } from 'react'
import Logo from 'components/Logo'
import ImageContainer from 'components/ImageContainer'
// import { Tile } from 'react-bulma-components'

import 'styles/home.scss'

export default memo(() => (
  <>
    <ImageContainer src="/static/home-bg.jpg" id="home" contentClass="home-bg">
      <Logo clickable className="home-logo" />
    </ImageContainer>
  </>
))

// <Tile>
// <Tile>
// <ImageContainer src="/static/bg.jpg" contentStyle={{ height: 300 }} />
// </Tile>
// <Tile>
// <ImageContainer src="/static/bg.jpg" />
// </Tile>
// <Tile>
// <ImageContainer src="/static/bg.jpg" />
// </Tile>
// <Tile>
// <ImageContainer src="/static/bg.jpg" />
// </Tile>
// </Tile>
