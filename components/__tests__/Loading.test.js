import { render } from 'react-testing-library'
import Loading from 'components/Loading'

it('renders correctly', () => {
  const { container } = render(<Loading />)
  expect(container).toMatchSnapshot()
})

it('accepts props', () => {
  const { container } = render(<Loading size={60} absolute={false} />)
  expect(container).toMatchSnapshot()
})
