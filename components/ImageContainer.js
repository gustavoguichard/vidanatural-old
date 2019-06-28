import { memo } from 'react'
import classnames from 'classnames'
import Img from 'components/Img'

import 'styles/image-container.scss'

export default memo(props => {
  const {
    src,
    className,
    contentClass,
    children,
    column = false,
    contentStyle,
    center = false,
    fixed,
    low,
    webp,
    ...wrapperProps
  } = props
  const classes = classnames('image-container', className)
  const bgClasses = classnames('bg-image', { fixed })
  return (
    <div {...wrapperProps} className={classes}>
      <Img webp={webp} low={low} src={src} expand className={bgClasses} />
      <div
        css={{
          display: 'flex',
          flexDirection: column ? 'column' : 'row',
          zIndex: 1,
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: center ? 'center' : undefined,
        }}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  )
})
