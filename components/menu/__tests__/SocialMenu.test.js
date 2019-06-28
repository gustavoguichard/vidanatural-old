import { render } from '@testing-library/react'
import SocialMenu from '../SocialMenu'

it('renders correctly', () => {
  const { container } = render(<SocialMenu />)
  expect(container).toMatchSnapshot()
})
