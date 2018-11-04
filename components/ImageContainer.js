import { Suspense, memo } from 'react'
import classnames from 'classnames'
import Loading from 'components/Loading'
import { useMounted } from 'utils/hooks'
import { Img } from 'utils/createResource'

import 'styles/image-container.scss'

export default memo(props => {
  const {
    src,
    className,
    contentClass,
    children,
    contentStyle,
    isBg = true,
    cover = true,
    fixed,
    ...wrapperProps
  } = props
  const classes = classnames('image-container', className)
  const bgClasses = classnames('bg-image', { cover, fixed })
  const contentClasses = classnames('content-above', contentClass)
  const isMounted = useMounted()
  return (
    <div {...wrapperProps} className={classes}>
      {isMounted && (
        <Suspense fallback={<Loading size={100} />}>
          <Img
            className={bgClasses}
            src={src}
            style={isBg ? { display: 'none' } : {}}
          />
          {isBg && (
            <div
              className={bgClasses}
              style={{ backgroundImage: `url(${src})` }}
            />
          )}
        </Suspense>
      )}
      <div className={contentClasses} style={contentStyle}>
        {children}
      </div>
    </div>
  )
})
