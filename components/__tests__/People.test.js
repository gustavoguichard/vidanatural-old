import { render } from 'react-testing-library'
import People from 'components/People'

it('renders correctly', () => {
  const { container } = render(<People />)
  expect(container).toMatchSnapshot()
})
