import { render } from 'react-testing-library'
import Logo from 'components/Logo'

it('renders correctly', () => {
  const { container } = render(<Logo style={{ margin: 0 }} foo="bar" />)
  expect(container).toMatchSnapshot()
})
