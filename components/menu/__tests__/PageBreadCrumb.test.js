import { render } from 'react-testing-library'
import PageBreadCrumb from '../PageBreadCrumb'

it('renders correctly', () => {
  const { container } = render(<PageBreadCrumb title="Foo" bar="zaz" />)
  expect(container).toMatchSnapshot()
})
