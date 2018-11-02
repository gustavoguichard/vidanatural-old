import classnames from 'classnames'
import 'styles/image-container.scss'

export default ({
  src,
  thumbPath,
  className,
  contentClass = '',
  children,
  cover = true,
  fixed,
  ...props
}) => {
  const classes = classnames('image-container', className)
  const bgClasses = classnames('bg-image', { cover, fixed })
  const contentClasses = classnames('content-above', contentClass)
  return (
    <div {...props} className={classes}>
      <div className={bgClasses} style={{ backgroundImage: `url(${src})` }} />
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  )
}
