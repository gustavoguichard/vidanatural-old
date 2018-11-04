import { render } from 'react-testing-library'
import About from 'components/About'

it('renders correctly', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})
