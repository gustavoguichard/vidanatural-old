import get from 'lodash/get'
import MediaQuery from 'react-responsive'

export const isRetina = () => window.devicePixelRatio > 1.3

export const Responsive = ({ media = 'desktop', children }) => {
  const query = get(
    {
      desktop: '(min-device-width: 992px)',
      tabletUp: '(min-device-width: 768px)',
      tabletDown: '(max-device-width: 991px)',
    },
    media,
  )
  return <MediaQuery query={query} children={children} />
}

export const isMobile = () =>
  (process.browser && navigator.userAgent.match(/Android/i)) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)

export const isTablet = () =>
  process.browser && (isMobile() || navigator.userAgent.match(/iPad/i))

export const isDesktop = () => !isTablet()
