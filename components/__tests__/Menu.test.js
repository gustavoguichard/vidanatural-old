import { render } from '@testing-library/react'
import Menu from 'components/Menu'

it('renders correctly', () => {
  const { container } = render(<Menu />)
  expect(container).toMatchSnapshot()
})
