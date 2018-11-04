import { render } from 'react-testing-library'
import People from 'components/People'

it('renders correctly', () => {
  const { container } = render(<People router={{ pathname: '/' }} />)
  expect(container).toMatchSnapshot()
})
