import { memo, useRef, useState } from 'react'
import classnames from 'classnames'
import { useOnScreen } from 'utils/hooks'

import 'styles/image-container.scss'

const Img = ({ src, low, webp, expand, ...props }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px', true)
  const css = expand
    ? {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      }
    : {}
  const resolution = (!onScreen && low) || src
  return (
    <picture {...props} css={css} ref={ref}>
      {webp && <source css={css} srcSet={webp} type="image/webp" />}
      <source css={css} srcSet={resolution} type="image/jpeg" />
      <img css={css} src={resolution} />
    </picture>
  )
}

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
