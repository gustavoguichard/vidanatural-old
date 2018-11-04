import { render } from 'react-testing-library'
import Home from 'components/Home'

it('renders correctly', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
