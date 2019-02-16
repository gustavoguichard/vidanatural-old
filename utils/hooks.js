import { useState, useRef, useEffect, useReducer, useLayoutEffect } from 'react'
import get from 'lodash/get'
import debounce from 'lodash/debounce'
import isEqual from 'lodash/isEqual'

export const useWindowDimensions = (throttle = 300) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  useLayoutEffect(() => {
    const update = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
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
      tabletDown: '(max-device-width: 991px)',
      tabletUp: '(min-device-width: 768px)',
    },
    media,
    media,
  )
  useLayoutEffect(
    () => {
      const mql = window.matchMedia(query)
      const onChange = () => setState(!!mql.matches)
      mql.addListener(onChange)
      setState(mql.matches)

      return () => mql.removeListener(onChange)
    },
    [media],
  )

  return state
}

export const useProcessOnce = (fn, ...args) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = fn(...args)
  }, [])
  return ref.current
}

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  return isMounted
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}

export const useHtmlClass = (className, condition) => {
  useEffect(
    () => {
      const { classList } = document.documentElement
      const method = condition ? 'add' : 'remove'
      classList[method](className)
    },
    [condition],
  )
}

export const useSetState = initialState => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialState,
  )
  return [state, setState]
}

export const useSafeSetState = initialState => {
  const [state, setState] = useSetState(initialState)
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  const safeSetState = (...args) => mountedRef.current && setState(...args)
  return [state, safeSetState]
}

export const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useDeepDiffEffect = (callback, values) => {
  const cleanup = useRef()
  useEffect(() => {
    if (!isEqual(previousValues, values)) {
      cleanup.current = callback()
    }
    return cleanup.current
  })
  const previousValues = usePrevious(values)
}
