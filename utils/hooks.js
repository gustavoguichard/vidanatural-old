import { useCallback, useState, useRef, useEffect } from 'react'
import get from 'lodash/get'
import debounce from 'lodash/debounce'

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const handleResize = debounce(
      () =>
        setDimensions({ width: window.innerWidth, height: window.innerHeight }),
      300,
    )
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return dimensions
}

export const useMedia = (media, defaultState = false) => {
  const [state, setState] = useState(defaultState)
  const query = get(
    {
      desktop: '(min-device-width: 992px)',
      tabletUp: '(min-device-width: 768px)',
      tabletDown: '(max-device-width: 991px)',
    },
    media,
  )

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) { return false }
      setState(!!mql.matches)
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => mql.removeListener(onChange)
  }, [media])

  return state
}

export const useProcessOnce = (value, fn) => {
  const ref = useRef()
  useEffect(() => ref.current = fn(value), [])
  return ref.current
}

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  return isMounted
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = useCallback(() => setValue(value => !value))
  return [value, toggler]
}
