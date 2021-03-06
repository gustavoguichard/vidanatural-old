import { render } from '@testing-library/react'
import Toggler from '../Toggler'

it('renders correctly', () => {
  const { container } = render(<Toggler />)
  expect(container).toMatchSnapshot()
})

it('accepts props', () => {
  const { container } = render(<Toggler isOpen />)
  expect(container).toMatchSnapshot()
})
