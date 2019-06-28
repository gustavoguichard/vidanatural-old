import compact from 'lodash/compact'
import { saturateOnHover } from 'utils/css'
import Img from 'components/Img'

const TestimonialImage = ({ square, src, path, ...props }) => {
  const source = compact([path, square ? 'square' : '', src]).join('/')
  return (
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
      <Img
        {...props}
        src={require(`../../static/${source}.jpg`)}
        low={require(`../../static/${source}.jpg?lqip`)}
        webp={require(`../../static/${source}.jpg?webp`)}
      />
    </figure>
  )
}

export default TestimonialImage
