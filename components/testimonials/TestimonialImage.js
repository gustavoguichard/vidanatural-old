import compact from 'lodash/compact'
import { saturateOnHover } from 'utils/css'

const TestimonialImage = ({ square, src, path, ...props }) => (
  <figure
    css={{
      ...saturateOnHover('0.6s'),
      marginBottom: -5,
      width: '100%',
      position: 'relative',
      minHeight: 250,
      paddingRight: 1,
    }}
  >
    <img
      src={compact([path, square ? 'square' : '', src]).join('/')}
      {...props}
    />
  </figure>
)

export default TestimonialImage
