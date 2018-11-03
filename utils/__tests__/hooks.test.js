import { cleanup, render, getNodeText, fireEvent } from 'react-testing-library'
import identity from 'lodash/identity'

import { element, getResultValue, getResultNode, clickEl } from 'test/utils'
import { sleep } from 'utils/helpers'
import * as subject from 'utils/hooks'

afterEach(cleanup)

describe('useWindowDimensions', () => {
  const Component = () => {
    const dimensions = subject.useWindowDimensions(4)
    return element(dimensions.width, 'width')
  }

  it('returns the window dimensions', () => {
    const value = getResultValue(Component, 'width')
    expect(value).toBe('1024')
  })

  it('listens to the window resize with throttle', async () => {
    const { el, rerender } = getResultNode(Component, 'width')
    window.innerWidth = 800
    fireEvent(window, new Event('resize'))
    rerender(<Component />)
    expect(getNodeText(el)).toBe('1024')
    await sleep(4)
    rerender(<Component />)
    expect(getNodeText(el)).toBe('800')
  })
})

describe('useMedia', () => {
  const Component = ({ media = 'desktop' }) => {
    const bool = subject.useMedia(media)
    return element(bool, 'bool')
  }
  window.matchMedia = jest.fn(() => ({
    addListener: jest.fn(),
    removeListener: jest.fn(),
    matches: true,
  }))

  it('returns a boolean', () => {
    const value = getResultValue(Component, 'bool')
    expect(value).toBe('true')
  })

  it('accepts some predefined values', () => {
    window.matchMedia.mockClear()
    getResultNode(Component, 'bool')
    expect(window.matchMedia).toHaveBeenCalledWith('(min-device-width: 992px)')
  })

  it('falls back to passed value', () => {
    window.matchMedia.mockClear()
    getResultNode(Component, 'bool', { media: 'foo' })
    expect(window.matchMedia).toHaveBeenCalledWith('foo')
  })
})

describe('useProcessOnce', () => {
  it('returns the value of current ref', () => {
    const Component = ({ value, fn }) => {
      const result = subject.useProcessOnce(value, fn)
      return element(result, 'value')
    }
    const { el, rerender } = getResultNode(Component, 'value', {
      value: 'foo',
      fn: identity,
    })
    expect(getNodeText(el)).toBe('foo')
    rerender(<Component value="bar" fn={identity} />)
    rerender(<Component />)
    expect(getNodeText(el)).toBe('foo')
  })
})

describe('useMounted', () => {
  const Component = () => {
    const result = subject.useMounted()
    return element(result, 'value')
  }
  it('returns true when component is mounted', () => {
    const value = getResultValue(Component, 'value')
    expect(value).toBe('true')
  })

  it('returns false when component is not yet mounted', () => {
    const { getByTestId } = render(<Component />)
    const el = getByTestId('value')
    expect(getNodeText(el)).toBe('false')
  })
})

describe('useToggle', () => {
  const Component = ({ initial }) => {
    const [result, fn] = subject.useToggle(initial)
    return element(result, 'value', fn)
  }

  it('returns toggled state', () => {
    const { el } = getResultNode(Component, 'value')
    expect(getNodeText(el)).toBe('false')
    clickEl(el)
    expect(getNodeText(el)).toBe('true')
  })

  it('accepts an initial value', () => {
    const { el } = getResultNode(Component, 'value', {
      initial: true,
    })
    expect(getNodeText(el)).toBe('true')
    clickEl(el)
    expect(getNodeText(el)).toBe('false')
  })
})
