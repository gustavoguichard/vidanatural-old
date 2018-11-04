import { render } from 'react-testing-library'
import MenuList from '../MenuList'

it('renders correctly', () => {
  const { container } = render(<MenuList router={{ pathname: '/' }} />)
  expect(container).toMatchSnapshot()
})
