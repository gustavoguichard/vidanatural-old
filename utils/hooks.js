import { useCallback, useState, useRef, useEffect } from 'react'
import get from 'lodash/get'
import debounce from 'lodash/debounce'

export const useWindowDimensions = (throttle = 300) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const update = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    const handleResize = debounce(update, throttle)
    window.addEventListener('resize', handleResize)
    update()
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
    media
  )
  useEffect(
    () => {
      const mql = window.matchMedia(query)
      const onChange = () => setState(!!mql.matches)
      mql.addListener(onChange)
      setState(mql.matches)

      return () => mql.removeListener(onChange)
    },
    [media]
  )

  return state
}

export const useProcessOnce = (fn, ...args) => {
  const ref = useRef()
  useEffect(() => (ref.current = fn(...args)), [])
  return ref.current
}

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  return isMounted
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(value => !value)
  return [value, toggler]
}

export const useHtmlClass = (className, condition) => {
  useEffect(
    () => {
      const { classList } = document.documentElement
      condition ? classList.add(className) : classList.remove(className)
    },
    [condition]
  )
}
