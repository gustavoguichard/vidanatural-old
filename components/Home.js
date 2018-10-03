import ImageReplace from 'components/ImageReplace'

import 'styles/home.scss'

export default () =>
  <div className="home-bg">
    <ImageReplace src="logo-white.png" className="home-logo">
      <h1>Vida Natural</h1>
    </ImageReplace>
  </div>
