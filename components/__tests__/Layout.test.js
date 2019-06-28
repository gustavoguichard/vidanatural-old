import { render } from '@testing-library/react'
import Layout from 'components/Layout'

it('renders correctly', () => {
  const { container } = render(<Layout>Foo</Layout>)
  expect(container).toMatchSnapshot()
})
