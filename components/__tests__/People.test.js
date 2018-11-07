import { render } from 'react-testing-library'
import People from 'components/People'

jest.mock('lodash/shuffle', () => jest.fn(value => value))

it('renders correctly', () => {
  const { container } = render(<People router={{ pathname: '/' }} />)
  expect(container).toMatchSnapshot()
})
