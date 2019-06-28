import { memo } from 'react'
import classnames from 'classnames'

import 'styles/image-container.scss'

const Img = ({ bgClasses, isBg, src, blur }) =>
  isBg ? (
    <div className={bgClasses} style={{ backgroundImage: `url(${src})` }} />
  ) : (
    <img
      css={blur ? { filter: 'blur(25px)' } : {}}
      className={bgClasses}
      src={src}
    />
  )

export default memo(props => {
  const {
    src,
    className,
    contentClass,
    children,
    column = false,
    contentStyle,
    isBg = true,
    center = false,
    fixed,
    ...wrapperProps
  } = props
  const isObj = typeof src === 'object'
  const classes = classnames('image-container', className)
  const bgClasses = classnames('bg-image', { fixed })
  return (
    <div {...wrapperProps} className={classes}>
      {isObj ? (
        <>
          <Img src={src.preSrc} bgClasses={bgClasses} isBg={isBg} blur />
          <Img src={src.src} bgClasses={bgClasses} isBg={isBg} />
        </>
      ) : (
        <Img src={src} bgClasses={bgClasses} isBg={isBg} />
      )}
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
