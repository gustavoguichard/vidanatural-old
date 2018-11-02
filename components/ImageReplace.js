import { memo } from 'react'

export default memo(({ src, children, width = 0, height = 0, style, ...props }) => {
  const source = `/static/${src}`
  const styles = {
    display: 'block',
    background: `url(${source}) center no-repeat`,
    backgroundSize: 'contain',
    height: `${height}px`,
    width: `${width}px`,
    overflow: 'hidden',
    textIndent: '-999em',
    ...style,
  }
  return (
    <div {...props} style={styles}>
      {children}
    </div>
  )
})
