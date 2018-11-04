import { render } from 'react-testing-library'
import Index from 'pages/index'

jest.mock('components/People', () => props => (
  <div {...props}>Loading People</div>
))

it('renders correctly', () => {
  const { container } = render(<Index />)
  expect(container).toMatchSnapshot()
})
