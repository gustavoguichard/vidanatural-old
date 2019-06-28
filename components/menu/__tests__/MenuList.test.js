import { render } from '@testing-library/react'
import MenuList from '../MenuList'

it('renders correctly', () => {
  const { container } = render(<MenuList router={{ pathname: '/' }} />)
  expect(container).toMatchSnapshot()
})
