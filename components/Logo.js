import { memo } from 'react'
import { withRouter } from 'next/router'
import { scrollToId } from 'utils/helpers'
import ImageReplace from 'components/ImageReplace'

const Logo = ({ router, clickable = false, onClick, style, ...props }) => (
  <ImageReplace
    src="logo-white.png"
    onClick={
      clickable
        ? () => {
            onClick && onClick()
            router.pathname === '/' || router.push('/')
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

export default withRouter(memo(Logo))
