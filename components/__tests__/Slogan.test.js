import { render } from '@testing-library/react'
import Slogan from 'components/Slogan'

it('renders correctly', () => {
  const { container } = render(<Slogan foo="bar" className="test" />)
  expect(container).toMatchSnapshot()
})
