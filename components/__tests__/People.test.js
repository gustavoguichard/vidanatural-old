import { render } from '@testing-library/react'
import People from 'components/People'

jest.mock('lodash/shuffle', () => jest.fn(value => value))

it('renders correctly', () => {
  const { container } = render(<People router={{ pathname: '/' }} />)
  expect(container).toMatchSnapshot()
})
