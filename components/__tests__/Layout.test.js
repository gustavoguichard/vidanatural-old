import { render } from 'react-testing-library'
import Layout from 'components/Layout'

it('renders correctly', () => {
  const { container } = render(<Layout>Foo</Layout>)
  expect(container).toMatchSnapshot()
})
