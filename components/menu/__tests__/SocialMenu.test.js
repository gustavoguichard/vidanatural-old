import { render } from 'react-testing-library'
import SocialMenu from '../SocialMenu'

it('renders correctly', () => {
  const { container } = render(<SocialMenu />)
  expect(container).toMatchSnapshot()
})
