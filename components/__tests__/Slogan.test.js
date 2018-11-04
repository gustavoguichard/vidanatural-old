import { render } from 'react-testing-library'
import Slogan from 'components/Slogan'

it('renders correctly', () => {
  const { container } = render(<Slogan foo="bar" className="test" />)
  expect(container).toMatchSnapshot()
})
