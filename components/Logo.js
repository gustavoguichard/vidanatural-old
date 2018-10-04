import classnames from 'classnames'
import { scrollToId } from 'utils/helpers'
import ImageReplace from 'components/ImageReplace'

export default ({ clickable = false, onClick, style, ...props }) =>
  <ImageReplace
    src="logo-white.png"
    onClick={
      clickable
        ? event => {
            onClick && onClick()
            scrollToId()
          }
        : undefined
    }
    width="130"
    height="117"
    className="logo"
    style={{ cursor: clickable ? 'pointer' : 'inherit', ...style }}
    {...props}
  >
    <h1>Vida Natural</h1>
  </ImageReplace>
