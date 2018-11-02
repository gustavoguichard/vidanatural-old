import { useCallback, useState, useRef, useEffect } from 'react'
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

export const useProcessOnce = (value, fn) => {
  const ref = useRef()
  useEffect(() => ref.current = fn(value), [])
  return ref.current
}

export const useMounted = () => useProcessOnce(false, value => !value)

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = useCallback(() => setValue(value => !value))
  return [value, toggler]
}
