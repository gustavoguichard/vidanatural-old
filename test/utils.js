import { render, getNodeText, fireEvent } from 'react-testing-library'
import flow from 'lodash/flow'
import toString from 'lodash/toString'

export const element = (value, fn, id = 'test-el') => (
  <div data-testid={id} onClick={fn}>
    {toString(value)}
  </div>
)

export const clickEl = (el, options) => fireEvent.click(el, options)

export const getResultValue = node => {
  const { el } = getResultNode(node)
  return getNodeText(el)
}

export const getResultNode = component => {
  const { getByTestId, rerender } = render(component)
  const el = getByTestId('test-el')
  rerender(component)
  const rerenderTwice = flow([rerender, rerender])
  return { el, rerender, rerenderTwice }
}

export const Hook = ({ use, children, ...props }) => children(use(props))
