import { render } from 'react-testing-library'
import Menu from 'components/Menu'

it('renders correctly', () => {
  const { container } = render(<Menu />)
  expect(container).toMatchSnapshot()
})
