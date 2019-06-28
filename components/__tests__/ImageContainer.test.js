import { render } from '@testing-library/react'
import About from 'components/About'

it('renders correctly', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})
