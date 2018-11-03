import { Suspense, memo } from 'react'
import classnames from 'classnames'
import Loading from 'components/Loading'
import { useMounted } from 'utils/hooks'
import createResource from 'utils/createResource'

import 'styles/image-container.scss'

const ImgResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = process.browser && new Image()
    image.src = src
    image.onload = resolve
    image.onerror = reject
  })
})

const Img = props => {
  ImgResource.read(props.src)
  return <img {...props} />
}

export default memo(props => {
  const { src, thumbPath, className, contentClass, children, ...otherProps } = props
  const { isBg = true, cover = true, fixed, ...wrapperProps } = otherProps
  const classes = classnames('image-container', className)
  const bgClasses = classnames('bg-image', { cover, fixed })
  const contentClasses = classnames('content-above', contentClass)
  const isMounted = useMounted()
  return (
    <div {...wrapperProps} className={classes}>
      {isMounted &&
        <Suspense fallback={<Loading size={100} />}>
          <Img className={bgClasses} src={src} style={isBg ? { display: 'none' } : {}} />
          {isBg && <div className={bgClasses} style={{ backgroundImage: `url(${src})` }} />}
        </Suspense>}
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  )
})
