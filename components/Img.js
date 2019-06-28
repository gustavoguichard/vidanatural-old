import { useRef } from 'react'
import { useOnScreen } from 'utils/hooks'

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

export default Img
