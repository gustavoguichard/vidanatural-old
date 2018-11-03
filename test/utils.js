import { render, getNodeText, fireEvent } from 'react-testing-library'
import toString from 'lodash/toString'

export const element = (value, id, fn) => (
  <div data-testid={id} onClick={fn}>
    {toString(value)}
  </div>
)

export const clickEl = (el, options) => fireEvent.click(el, options)

export const getResultValue = (...args) => {
  const { el } = getResultNode(...args)
  return getNodeText(el)
}

export const getResultNode = (Component, id, props) => {
  const { getByTestId, rerender } = render(<Component {...props} />)
  const el = getByTestId(id)
  rerender(<Component {...props} />)
  return { el, rerender }
}
