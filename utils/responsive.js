import matchMedia from 'matchmediaquery'

export const isRetina = () => window.devicePixelRatio > 1.3

export const MEDIA_QUERY = {
  DESKTOP: '(min-device-width: 992px)',
  TABLET_UP: '(min-device-width: 768px)',
  TABLET_DOWN: '(max-device-width: 991px)',
}

export const isTabletDown = () => matchMedia(MEDIA_QUERY.TABLET_DOWN)
export const isTabletUp = () => matchMedia(MEDIA_QUERY.TABLET_UP)
