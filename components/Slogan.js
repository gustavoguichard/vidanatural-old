import { memo } from 'react'
import classnames from 'classnames'
import ImageReplace from 'components/ImageReplace'

const Slogan = ({ className, style, responsive, ...props }) => (
  <ImageReplace
    {...props}
    style={{ ...style, ...{ width: responsive || 288, height: 45 } }}
    width="288"
    height="45"
    className={classnames('slogan', className)}
    src="slogan.png"
  >
    <h2>Eu uso</h2>
    <h3>Cosmética Consciente</h3>
  </ImageReplace>
)

export default memo(Slogan)
