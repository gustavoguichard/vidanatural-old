import { memo } from 'react'
import { scrollToId } from 'utils/helpers'
import ImageReplace from 'components/ImageReplace'

const Logo = ({ clickable = false, onClick, style, ...props }) => (
  <ImageReplace
    src="logo-white.png"
    onClick={
      clickable
        ? () => {
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
)

export default memo(Logo)
